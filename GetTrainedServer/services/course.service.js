'use strict';
const mongoose = require('mongoose'),
   Course = mongoose.model('Courses'),
   User = mongoose.model('User'),
   emailService = require('./email.service');

let throwError = function (err, callback, msg) {
   callback(msg);
};

// API for creation of new course
exports.save = function (courseObj, callback, errCallback) {
   let newCourse = new Course(courseObj);
   newCourse.save(function (err, course) {
       if (err) {
           throwError(err, errCallback, "Error saving course");
           return;
       }
       //callback(course);
       else {
           emailService.invite(course);
           let learners = course.course_learners;
           learners.forEach(element => {
            let userCourse = {
                'progress': 0,
                'lastSlideIndex': 0,
                'score': 0,
                'course_id': course._id
            };
               User.findOne({email: element}, (err, user) => {
                   if(err) throw err;
                   else {
                    user.courses_enrolled.push(userCourse);
                    user.save((err, user) => {
                        if(err) throw err;
                        else{
                        }
                    })
                   }
               })
           });
           callback(course);
       }
   });
};

// fetches the courses based upon the creator
exports.display = (req, res) => {
   Course.find({ course_created_by: req.query.userId }, function (err, courses) {

       if (err)
           throw err;
       else {
           res.json(courses);
       }

   });
}

//updates the progress while taking the course
exports.update = function (course, callback) {
    let resultCallback = function (err, course) {
        throwError(err);
        callback(course);
    };
    course.course_modified_date = new Date();
    Course.findOneAndUpdate({
        _id: course._id
    }, course, {
            new: true
        }, resultCallback);
    }

exports.find = (id, res, callback) => {
   //retrieving the enrolled courses as array of objects against userID
   User.findOne({user_id: id}, function(err, user) {
       if(err){
       throw err;
       }
       let courses = user.courses_enrolled;
       const size = courses.length;
       let counter =0;
       let enrolled_courses =[];
       courses.forEach(element => {
           let userCourse = { //retrieving progress and last index of slide with courses
               'progress': element.progress,
               'lastSlideIndex': element.lastSlideIndex
           }
           Course.findById( element.course_id, (err, course) => {
               if(err)throw err;
               else{
                   userCourse.course = course;
                   enrolled_courses.push(userCourse); //pushing each course in the enrolledCourses array that a user is enrolled for
                   if(counter===(size-1)){
                       res.json(enrolled_courses);
                   }
                   counter++;
               }
           });
       });
   });
}

exports.displayCourse = function (params, callback, errCallback) {

    //retrieves the list of courses for specific user
    Course.find(params, function (err, course) {
        if(err){
            throwError(err, errCallback, "Error finding message");
            return;
        }
        callback(course);
    });
}
