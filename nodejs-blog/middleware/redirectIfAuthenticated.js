module.exports = (req, res, next) => {

    // if user is logged in, permit to home page
    if(req.session.userId) {
        return res.redirect('/')
    }
    next()
}