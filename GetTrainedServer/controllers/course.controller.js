let courseService = require('../services/course.service');
let emailService = require('../services/email.service');

exports.post = function (request, response) {
    let newCourse = Object.assign({}, request.body);
    courseService.save(newCourse, function (course) {
        response.status(200);
        response.json(course);
        emailService.invite(course);
    }, function (errMsg) {

        response.status(400).send(errMsg);
    });
};

exports.display = (req, res, err) => {
    courseService.display(req, res);

}

exports.displayCourse = (req, res, err) => {
    courseService.displayCourse(req, res);
}

exports.put = function (request, response) {
    let course = Object.assign({}, request.body),
        callback = function (course) {
        response.status(200);
        response.json({'msg': 'Course published'});
    };
    course._id = request.params.id;
    courseService.update(course, course._id, callback);
};
exports.find = (req, res, err) => {
    let id = req.params.id;
    courseService.find(id, res);

}
