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

module.exports.getVehiclesInLotWestDeck = function (req, res, next) {
    console.log("Getting Vehicles in West Deck");

    vehiclesInLot.find({lotName:'WestDeck'}, function (err, westDeckVehicles) {
        if (err) {
            res.send("Problem finding west deck vehicles")
        }
        else {
            res.json(westDeckVehicles);
        }
    })
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

/* module.exports.addVehiclesInLot = function (req, res, next) {
    console.log("Adding Vehicle With Plate: " + req.plate + " In Lot: " + req.lot);
    registeredVehicles.findOne({'plate': req.params.plate}, function (err, validVehicle) {
        if(err){
            res.send("Error Finding Vehicle")
        }
        else{
            //its an unknown plate altogether
            if(validVehicle.plate == null){
                console.log("Found Unknown Vehicle. Adding to db...")
                var newVehicle = {
                    plate: req.params.plate,
                    lotname: req.params.lot,
                    registered: false
                }
            }else if(validVehicle.lotName != req.params.lot){ //It is registered but parked in wrong lot
                console.log("Found Vehicle in wrong lot. Adding to db...")
                var newVehicle = {
                    plate: req.params.plate,
                    lotname: req.params.lot,
                    registered: false,
                    make: validVehicle.make,
                    model: validVehicle.model,
                    studentID: validVehicle.studentID
                }
            }else{ //it is registered and in correct lot
                console.log("Found Registered Vehicle. Adding to db...")
                var newVehicle = {
                    plate: req.params.plate,
                    lotname: req.params.lot,
                    registered: true,
                    make: validVehicle.make,
                    model: validVehicle.model,
                    studentID: validVehicle.studentID
                }
            }

            vehiclesInLot.insert(newVehicle);
        }
    });
}; */
