var mongoose = require('mongoose');
var vehiclesInLot = mongoose.model('vehiclesInLot');
var registeredVehicles = mongoose.model('registeredVehicles');
//const vehiclesInLot = require('../models/vehiclesInLot.js');



/*** Vehicles in lot API 
 * Get and Remove from lot
 */
module.exports.getVehiclesInLot = function (req, res) {
    vehiclesInLot.find(function (err, vehiclesinlot) {
        res.send(vehiclesinlot);
    });
};


module.exports.deleteVehiclesInLot = function (req, res, next) {
    console.log("Deleting Vehicle");
    vehiclesInLot.findByIdAndRemove(req.params.id, function (err, deletedVehicle) {
        if (err) {
            res.send("Error with deleting vehicle")
        }
        else {
            res.json(deletedVehicle);
        }
    })
};
 
module.exports.addVehiclesInLot = function (req, res, next) {
    console.log("Validating Vehicle With Plate: " + req.plate + " In Lot: " + req.lot);
    //Before we add a plate to the lot, we check its validity
    //search registered vehicle table for a plate that matches the one just passed
registeredVehicles.findOne({plate:req.params.plate},function(err,vehicle){
    if(err){ //MongoDb error
        console.log("MongoDB Error: " + err);
        return false; //callback?
    }
    if(!vehicle){//if we don't find a match, set plate and lot and send to db
        console.log("No Match Found Plate Is Not Registered. Adding to DB...");
        vehiclesInLot.create(
            {
                registered: false,
                plate: req.params.plate,
                lotName: req.params.lot
            }, function(err,createdVehicle){
                if(err){
                    console.log("MongoDB Error When Creating: " + err);
                    return null; //callback?
                }
            }
        );
    }
    else{ //if we find a match, verify it is in the correct lot
        if(req.params.lot != vehicle.lotName){//if it isn't, add relavent metadata, set as invalid and send to db
            console.log("Registered Vehicle, Wrong Lot Name. adding to DB...");
            vehiclesInLot.create(
                {
                    registered: false,
                    plate: req.params.plate,
                    lotName: req.params.lot,
                    make: vehicle.make,
                    model: vehicle.model,
                    studentID: vehicle.studentID
                }, function(err,createdVehicle){
                    if(err){
                        console.log("MongoDB Error When Creating: " + err);
                        return null; //callback?
                    }
                }
            );
        }else{//if it is, add relavent metadata, set as valid and send to db
            console.log("Registered Vehicle, Correct Lot Name. adding to DB...");
            vehiclesInLot.create(
                {
                    registered: true,
                    plate: req.params.plate,
                    lotName: req.params.lot,
                    make: vehicle.make,
                    model: vehicle.model,
                    studentID: vehicle.studentID
                }, function(err,createdVehicle){
                    if(err){
                        console.log("MongoDB Error When Creating: " + err);
                        return null; //callback?
                    }
                }
            );
        };
    };
});
        

            

            
        
        
    
};
