const user_dao = require('../database/user-dao')

module.exports = (req, res) => {
    console.log(req.body)
    user_dao.create_user(req.body)
    res.redirect('/')
}


