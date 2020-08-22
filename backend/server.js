const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//variable declarations
const app = express()
const PORT = parseInt(process.env.PORT) || 5000;

//Disable power-by 
app.disable('x-powered-by');

//Middleware for main app thread
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES FOR VARIOUS ASPECTS OF THE PLATFORMS
app.use('/api', require('./src/routes/guest.route'));
app.use('/api/client', require('./src/routes/client.route'));
app.use('/api/doctor', require('./src/routes/doctors.route'));
app.use('/api/hospital', require('./src/routes/hospitals.route'));
app.use('/api/dcenter', require('./src/routes/diagnostic-center.route'));

//SERVER LISTENING ON DESIGNATED PORT
app.listen(PORT, ()=>{console.log(`Server listening on port ${PORT}`)})