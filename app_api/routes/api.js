//API endpoints defined 

const express = require('express')
const router = express.Router()
const User = require('../models/user')
const vehiclesinlot = require('../models/vehiclesInLot')
var mongoose = require('mongoose');


//To ensure only registered users are able to access the dashboard 
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

/*************** API Calls  *********/
var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
const ctrlDash  = require('../controllers/dashboard')

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);




router.get('/',(req,res) => {
    res.send('From API route')
} )


/***** For Dashboard */
router.get('/vehiclesinlot',ctrlDash.getVehicles)


module.exports = router 