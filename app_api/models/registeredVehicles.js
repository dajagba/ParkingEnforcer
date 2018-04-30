 const mongoose = require('mongoose')


//creating a user schema 
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
            required: true
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