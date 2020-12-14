const User = require('../database/User')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

    const {email, password } = req.body
    //try to find the user
    User.findOne({email}, (error, user) => {
        if(user) {
            //compare password with bcrypt
            bcrypt.compare(password, user.password, (error, same) => {
                if(same) {
                    req.session.userId = user._id
                    console.log('Login successful, redirect to home page')
                    res.redirect('/')
                } else {
                    //password did not match, so decline login to retry again
                    declineLogin(res)
                }
            })
        } else {
            //no user found redirect to login
            declineLogin(res)
        }
    })
}

function declineLogin(res) {
    console.log('login unsuccessful, redirect to login page again')
    res.redirect('/auth/login')
}