//import { Timestamp } from 'rxjs';

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
            
        },
        model:
        {
            type: String,
            
        },
        studentID:
        {
            type: Number,
            min: [8, 'Must be 8 digits long'],
            max: [8, 'Must be 8 digits long']
           
        },
        registered:
        {
            type:Boolean,
            default: false
        },
        time: 
        { type : Date,
         default: Date.now 
        }

})

mongoose.model('vehiclesInLot', vehicleInLotSchema,'vehiclesInLot');
