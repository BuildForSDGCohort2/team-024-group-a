const router = require('express').Router();


router.get('/',  [], function(req, res){
    return res.status(200).json({message: "Clients routes"})
});


module.exports = router;

