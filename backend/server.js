const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require('dotenv').config();
require('./config/Database').connect();


//variable declarations
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 5000;


//Disable power-by 
app.disable("x-powered-by");


//Passport auth
const passport = require("./config/Passport");
passport.init().extractJwt(process.env.SECRET_KEY);


//Middleware for main app thread
app.use(morgan("dev"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES FOR VARIOUS ASPECTS OF THE PLATFORMS
app.use("/api", require("./src/routes/guest.route"));
app.use("/api/client", require("./src/routes/client.route"));
app.use("/api/doctor", require("./src/routes/doctors.route"));
app.use("/api/hospital", require("./src/routes/hospitals.route"));
app.use("/api/dcenter", require("./src/routes/diagnostic-center.route"));
app.use("/api/admin", require("./src/routes/admin.route"));


//SERVER LISTENING ON DESIGNATED PORT
app.listen(PORT, () =>{
    
});