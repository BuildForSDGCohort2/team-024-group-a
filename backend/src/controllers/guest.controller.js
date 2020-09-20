const _app = require("../../config/App")
const mailer = require('../../config/Mailer')




class GuestController {

    constructor(){
        
    }

        async welcome(req, res) {
        let message = await `Welcome to ${_app.APP_NAME} Platform`;
        return res.status(200).format({
            html: () =>{
                res.send(message);
            },
            json: () =>{
                res.status(200).json({message});
            },
            text: () =>{
                res.status(200).end(message);
            },
            default: () =>{
                res.status(200).json({message});
            }
        });
    }
}

module.exports = new GuestController();