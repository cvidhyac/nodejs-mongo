const user_dao = require('../database/user-dao')

module.exports = (req, res) => {
    console.log(req.body)
    const regErrors = user_dao.create_user(req.body)
    if(regErrors) {
    
        req.flash('flashErrors', regErrors)
        return res.redirect('/auth/register')
    }
    console.log('reached end, redirecting to homepage')
    res.redirect('/')
}


