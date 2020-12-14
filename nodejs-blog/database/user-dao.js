const User = require('./User')

exports.create_user = function(req, res) {
    User.create(req.body, (error, success) => {
        if(error) {
            req.session.regErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            res.redirect('/auth/register')
        } else {
            console.log('User Save successful')
        }
    })
}