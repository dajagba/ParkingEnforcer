//API endpoints defined 

const express = require('express')
const router = express.Router({ mergeParams: true });
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
// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});



router.get('/',(req,res) => {
  res.send('From API route');
} )


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
const ctrlDash  = require('../controllers/dashboard');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);




/***** For Dashboard */

router.route('/vehicles')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var vehiclesinlot2 = new vehiclesinlot();      // create a new instance of the Bear model
        vehiclesinlot2.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        vehiclesinlot2.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'vehiclesinlot created!' });
        });

    });

router.get('/vehiclesinlot',ctrlDash.getVehiclesInLot);

//router.delete('/vehiclesinlot/:id',ctrlDash.deleteVehiclesInLot)
/* router.delete('/vehiclesinlot/:id',function(req,res){
   var id = req.params.id
   getVehiclesInLot.findOneAndRemove({_id: id}, function(err)
  {
    if (err)
    {
      return console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send(); 
  });
});
 */

router.route('/vehiclesinlot/:id')

.delete(function(req, res) {
  vehiclesinlot.remove({
      _id: req.params.id
  }, function(err, vehiclesinlot) {
      if (err)
          res.send(err);

      res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router 