const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJwt = require("passport-jwt");
const knex = require("../src/database/knex");

class Passport {
    
    constructor(){

    }

    init(){
        //AuthType can either be client, doctor, hospital or diagnostic center
        passport.use("login", new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password'
            },
           function(username, password, done){
            knex('users')
                .where('username', username)
                .select('email', 'password', 'id', 'role')
                .first()
                .then((user) => {
                    if(!user){return done(null, false, {})}
                    user = user.toJSON();
                    if(user.validPassword(password)){
                        return done(null, false);
                    }
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                });
           }
        ));
  
        return this;
    }

    extractJwt(){
        passport.use(new passportJwt.Strategy({
            secretOrKey: process.env.SECRET_KEY,
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
        }, 
          async (token, done)=>{
              try {
                  return done(null, token.user);
              } catch (err) {
                  done(err);
              }
          }
        ))

        return this;
    }
}


module.exports = new Passport();