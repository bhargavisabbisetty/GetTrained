module.exports = (app) => {
    const courseController = require('../controllers/course.controller');

    app.route('/courses')
    .post(courseController.post) //route to post a new course
    .get(courseController.display); //route to display whole course
    app.route('/courses/:id') 
    .put(courseController.put); //update a specific course
    
    app.route('/dashboard/:id')
    .get(courseController.find);  //get a specific course

};