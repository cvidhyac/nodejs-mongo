//This acts as View in MVC
module.exports = (req, res) => {
    // console.log(req.session.regErrors)
    res.render('register', {
        errors: req.flash('flashErrors'),
        data: req.flash('data')[0] //flash returns a array for request body
    })
}