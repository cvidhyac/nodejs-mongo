//This acts as View in MVC
module.exports = (req, res) => {
    // console.log(req.session.regErrors)
    res.render('register', {
        errors: req.flash('flashErrors')
    })
}