let userService = require('../services/user.service'),
    emailService = require('../services/email.service');

// register the user and send email.
exports.register = (req, res) => {
    let user = Object.assign({}, req.body),
        callback = function (user) {
            res.status(200);
            res.json(user);
            emailService.sendMail(user); //Send activation email after successful registration.
        };
    userService.save(user, res, callback);
}

exports.login = (req, res) => {
    let user = Object.assign({}, req.body);
    userService.login(user, res);
}
exports.updateProgress = (req, res) => {
    let data = Object.assign({}, req.body);
    userService.updateProgress(data, res);
}
exports.display = (req, res) => {
    userService.display(req, res);
}