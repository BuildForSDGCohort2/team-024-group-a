const router = require('express').Router();
const guestController = require('../controllers/guest.controller');


router.get('/',  [], guestController.welcome);


module.exports = router;

