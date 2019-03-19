let emailService = require('../services/email.service');

//Invoking activation of user account
exports.activate = (req, res, err) => {
    emailService.activate(req, res);
}