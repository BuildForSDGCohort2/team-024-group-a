const router = require("express").Router();


router.get("/", [], function(req, res){
    return res.status(200).json({message: "Hospitals routes"});
});


module.exports = router;

