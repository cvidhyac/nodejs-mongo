const User = require('../database/user-dao')

module.exports = (req, res) => {
    User.create_user(req.body)
    res.redirect('/')
}