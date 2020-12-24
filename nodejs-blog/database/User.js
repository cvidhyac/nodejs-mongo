const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Create a user schema with validation
const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: [true, 'Email already exists in the system. Please sign-in or use Forgot Password']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be empty, please try again']
    }
})



//Example for mongoose model hooks to encrypt password
UserSchema.pre('save', function(next) {
 const user = this
 bcrypt.hash(user.password, 10, (err, encrypted) => {
     console.log('Encryption successful!')
     user.password = encrypted
     next()
 })
})

module.exports = mongoose.model('User', UserSchema)
