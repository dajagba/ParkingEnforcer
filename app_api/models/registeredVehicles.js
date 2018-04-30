 const mongoose = require('mongoose')


//creating a registered vehicles schema 
const Schema = mongoose.Schema  


const registeredVehicleSchema = new Schema ({
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
        plate:
        {
            type: String,
            required: true
        },
        studentID:
        {
            type: Number,
            required: true,
            min: [8, 'Must be 8 digits long'],
            max: [8, 'Must be 8 digits long']
        },
        firstName:
        {
            type: String,
            required: true
        },
        lastName:
        {
            type:String,
            required: true
        },
        lotName:
        {
            type:String,
            required: true
        }
})

mongoose.model('registeredVehicles', registeredVehicleSchema,'registeredVehicles'); 