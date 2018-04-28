//API endpoints defined 

const express = require('express')
const router = express.Router()
const User = require('./models/user')


//To ensure only registered users are able to access the dashboard 
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

/*************** API Calls  *********/
router.get('/dashboard', auth, ctrlProfile.profileRead);


router.get('/',(req,res) => {
    res.send('From API route')
} )




module.exports = router 