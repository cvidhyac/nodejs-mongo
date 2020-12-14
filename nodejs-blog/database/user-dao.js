const User = require('./User')

exports.create_user = function(request_body) {
    User.create(request_body, (error, success) => {
        if(error) {
            console.log(error)
        } else {
            console.log('User Save successful')
        }
    })
}