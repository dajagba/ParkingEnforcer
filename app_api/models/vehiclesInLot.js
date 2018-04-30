const mongoose = require('mongoose')


//creating a user schema 
const Schema = mongoose.Schema  


const vehicleInLotSchema = new Schema ({
        plate:
        {
            type: String, 
            unique: true, 
            required: true
        },
        lotName:
        {
            type: String,
            required: true
        },
        make:
        {
            type: String,
            required: true
        },
        model:
        {
            type: String,
            required: true
        },
        studentID:
        {
            type: String,
            required: true
        },
        registered:
        {
            type:Boolean,
            default: false
        }
})

mongoose.model('vehiclesInLot', vehicleInLotSchema,'vehiclesInLot');
