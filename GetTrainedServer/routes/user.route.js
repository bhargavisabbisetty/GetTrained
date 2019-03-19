module.exports = (app) => {
    const userController = require('../controllers/user.controller'),
            emailController = require('../controllers/email.controller');

    app.route('/register').post(userController.register); //this route helps to register a new user
    app.route('/activate/:token').put(emailController.activate); //route which helps to activate a user when he clicks on activation link
    app.route('/login').post(userController.login); //route to login page
    app.route('/updateprogress').put(userController.updateProgress); //route to update the status of a specific user
    app.route('/users').get(userController.display); //get the list of all the users
};