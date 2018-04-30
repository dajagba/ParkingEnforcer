//API endpoints defined 

const express = require('express')
const router = express.Router({ mergeParams: true });
const User = require('../models/user')
const vehiclesinlot = require('../models/vehiclesInLot')
var mongoose = require('mongoose');


//To accept params
router.use('/:id(\\d+)(/*)?', (req, res, next) => { 
  console.log(req.params); // { '0': undefined, '1': undefined, projId: '1337' }

  next();
});


//To ensure only registered users are able to access the dashboard 
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

/*************** API Calls  *********/
// middleware to use for all requests
/* router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});
 */


router.get('/',(req,res) => {
  res.send('From API route');
} );


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlDash  = require('../controllers/dashboard');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);




/***** For Dashboard */
var vehiclesInLot = mongoose.model('vehiclesInLot');

//Get of list of all vehicles in lot
router.get('/vehiclesinlot',ctrlDash.getVehiclesInLot);

//Get all vehicles in West Deck 
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotWestDeck)
//Get all vehicles in Central Deck
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotCentralDeck)
//Get all vehicles in Faculty Lot A
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotFaculty)
//Get all vehicles in Central Parking
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotCentralParking)
//Get all vehicles in East Economy
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotEastEconomy)
//Get all vehicles in Resident Parking
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotResident)
//Get all vehicles in West Parking
router.get('/vehiclesinlot/:id',ctrlDash.getVehiclesInLotWestParking)

//delete a vehicle in lot by _id
router.delete('/vehiclesinlot/:id',ctrlDash.deleteVehiclesInLot)

/* //add a vehicle to the lot. Specifying plate and lot
router.post('/vehiclesinlot/:plate-:lot',ctrlDash.addVehiclesInLot) */

module.exports = router 