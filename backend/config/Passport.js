const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJwt = require("passport-jwt");
const User = require("../src/database/models/Auth");

class Passport {
    
    constructor(){

    }

    init(req, res, next){
        //AuthType can either be client, doctor, hospital or diagnostic center
        var authType = req.query.authType;
        authType = (authType !== undefined && typeof authType === "string" ? authType : "");
        passport.use(authType, new LocalStrategy(
           function(username, password, done){
               new User({username})
                .fetch()
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
        next();
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