


class Auth {

    login(req,res, next){
        console.log(req.body);        
        console.log('login auth')
        next();

    }

    register(req, res, next){
        console.log('register')
        next()

    }


}


module.exports = new Auth()