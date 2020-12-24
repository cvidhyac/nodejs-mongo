module.exports = (req, res) => {
    console.log(req.session.regErrors)
    res.render('register', {
        errors: req.session.regErrors
    })
}