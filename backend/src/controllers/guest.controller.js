const _app = require("../../config/App")

class GuestController {

    constructor(){

    }

    welcome =  async (req, res)=>{
        let message = await `Welcome to ${_app.APP_NAME} Platform`;
        return res.status(200).format({
            html: function(){
                res.send(message);
            },
            json: function(){
                res.status(200).json({message});
            },
            text: function(){
                res.status(200).end(message);
            },
            default: function(){
                res.status(200).json({message});
            }
        });
    }
}

module.exports = new GuestController();