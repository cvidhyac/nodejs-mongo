const User = require('./User')

exports.create_user = function(req, res) {
    User.create(req.body, (error, success) => {
        if(error) {
            const flashErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('flashErrors', flashErrors)
            res.redirect('/auth/register')
        } else {
            console.log('User Save successful')
        }
    })
}