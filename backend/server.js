const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//variable declarations
const app = express()
const PORT = process.env.PORT | 5000;

//Disable power-by 
app.disable('x-powered-by');

//Middleware for main app thread
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, ()=>{console.log(`Server listening on port ${PORT}`)});