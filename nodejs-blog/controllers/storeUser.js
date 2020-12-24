const user_dao = require('../database/user-dao')

module.exports = (req, res) => {
    console.log(req.body)
    const regErrors = user_dao.create_user(req.body)
    if(regErrors) {
    
        req.flash('flashErrors', regErrors)
        //persist user data in the form so same details are not required to be entered during validation failures
        req.flash('data', req.body)
        return res.redirect('/auth/register')
    }
    console.log('reached end, redirecting to homepage')
    res.redirect('/')
}


