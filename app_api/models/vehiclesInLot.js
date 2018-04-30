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
            type: Number
           
        },
        registered:
        {
            type:Boolean,
            default: false
        },
        time: 
        { type : Date,
         default: Date.now 
        },
        ticketed: 
        { type : Boolean,
         default: false 
        }

})

mongoose.model('vehiclesInLot', vehicleInLotSchema,'vehiclesInLot');
