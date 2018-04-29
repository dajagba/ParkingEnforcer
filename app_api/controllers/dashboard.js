var mongoose = require('mongoose');
var vehiclesInLot = mongoose.model('vehiclesInLot');


module.exports.getVehicles = function(req,res) {
      mongoose.model('vehiclesInLot').find(function(err,vehiclesinlot)
      {
        res.send(vehiclesinlot);
      });
     }; 