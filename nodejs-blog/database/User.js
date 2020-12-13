const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Create a user schema with validation
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
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
