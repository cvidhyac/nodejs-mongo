module.exports = (req, res) => {
    if(req.session.userId) {
        return res.render('create')
    }
    //invalid session, login    
    res.redirect('/auth/login')
}