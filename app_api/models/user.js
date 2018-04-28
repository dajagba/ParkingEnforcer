
const mongoose = require('mongoose')
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

//creating a user schema 
const Schema = mongoose.Schema  
const userSchema = new Schema ({
    username:
    {
        type: String, 
        unique: true, 
        required: true
    },
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    studentID:
    {
        type: Number,
        required: true
    },
    role: 
    {
        type:Boolean,
        default: false
    },
    hash: String,
    salt: String
});

//Password encryption
// setting the password 
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };
//password checking
  userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  // Part of the hashing passwrod 
  userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  // return a signed module
     return jwt.sign({
      _id: this._id,
      username: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      studentID: this.studentID,
      role: this.role,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };
  mongoose.model('User', userSchema);

// using the user schema referencing the user collection in the MongoDB
//module.exports = mongoose.model('user',userSchema,'users')
