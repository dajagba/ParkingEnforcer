var mongoose = require('mongoose');
var vehiclesInLot = mongoose.model('vehiclesInLot');
//const vehiclesInLot = require('../models/vehiclesInLot.js');



/*** Vehicles in lot API 
 * Get and Remove from lot
 */
module.exports.getVehiclesInLot = function(req,res) {
    vehiclesInLot.find(function(err,vehiclesinlot)
      {
        res.send(vehiclesinlot);
      });
     }; 


module.exports.deleteVehiclesInLot = function(req,res) {
        console.log("Deleting Vehicle");
        console.log("Looking for and deleting ID: "+req.params.id);
        vehiclesInLot.findByIdAndRemove((req.params.id, function(err,deletedVehicle)
        {
            if(err)
            {
                res.send("Error with deleting vehicle")
            }
            else {
                res.json(deletedVehicle);
            }
        }))
    };
