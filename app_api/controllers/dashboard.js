var mongoose = require('mongoose');
var vehiclesInLot = mongoose.model('vehiclesInLot');
var registeredVehicles = mongoose.model('registeredVehicles');
//const vehiclesInLot = require('../models/vehiclesInLot.js');



/*** Vehicles in lot API 
 * Get and Remove from lot
 */
//gets a list of vehicles in all lots
module.exports.getVehiclesInLot = function (req, res) {
    vehiclesInLot.find(function (err, vehiclesinlot) {
        res.send(vehiclesinlot);
    });
};

//Get a list of all vehicles that matche the passed lotName
module.exports.getVehiclesInLotByLot = function (req, res) {
    vehiclesInLot.find({lotName: req.params.lot},function (err, vehiclesinlot) {
        res.send(vehiclesinlot);
    });
};



//deletes a vehicle in the lot by id
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

//Method for adding vehicle to a lot. Requires a plate and lot name to be sent
module.exports.addVehiclesInLot = function (req, res, next) {
    console.log("Validating Vehicle With Plate: " + req.params.plate + " In Lot: " + req.params.lot);
    //Before we add a plate to the lot, we check its validity
    //search registered vehicle table for a plate that matches the one just passed
registeredVehicles.findOne({plate:req.params.plate},function(err,vehicle){
    if(err){ //MongoDb error
        console.log("MongoDB Error: " + err);
        res.send("MongoDB Error: " + err)
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
                    res.send("MongoDB ErrorWhen Creating: " + err)
                }else{
                    console.log("Success Added Vehicle to DB");
                    res.send(200,"vehicle added todb");
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
                    studentID: 0000+ vehicle.studentID
                }, function(err,createdVehicle){
                    if(err){
                        console.log("MongoDB Error When Creating: " + err);
                        res.send("MongoDB ErrorWhen Creating: " + err)
                    }else{
                        console.log("Success Added Vehicle to DB");
                        res.send(200,"vehicle added todb");
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
                    studentID: 0000+vehicle.studentID
                }, function(err,createdVehicle){
                    if(err){
                        console.log("MongoDB Error When Creating: " + err);
                        res.send("MongoDB ErrorWhen Creating: " + err)
                    }else{
                        console.log("Success Added Vehicle to DB");
                        res.send(200,"vehicle added todb");
                    }
                }
            );
        };
    };
});
        

            

            
        
        
    
};
