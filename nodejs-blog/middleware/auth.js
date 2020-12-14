const User = require('../database/User')
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {

    const {email, password} = req.body
    //fetch user from database
    User.findById(req.session.userId, (error, user) => {
        if(error || !user) {
           console.log('Auth middleware invoked, user not found')
           return res.redirect('/auth/login')
        }
        next()
    })
    //verify user

    // if user is valid, permit request
}