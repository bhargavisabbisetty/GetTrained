module.exports = (app) => {
    const queryController = require('../controllers/query.controller');

    app.route('/queries')
    .post(queryController.post) //route for posting a new  feedback query
    .get(queryController.display); //route for displaying all queries
    app.route('/query/:id').get(queryController.displayquery); //displaying a feedback in detail
};