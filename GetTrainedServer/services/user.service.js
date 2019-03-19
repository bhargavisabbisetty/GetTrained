'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    uuidv3 = require('uuid/v3'),
    jwt = require('jsonwebtoken');

let secret = 'trainingModule'; // salt secret for jwt token.

let throwError = function (error, res) {
    if (error) {
        if (error.code == 11000)
            res.status(422).send(['Email Already exists in the system. Please try Logging in'])
    }
};

exports.save = function (user, res, callback) {
    let newUser = new User(user),
        resultCallback = function (err, user) {
            throwError(err, res);
            callback(user);
        };
    newUser.user_id = uuidv3(newUser.email, uuidv3.DNS); //generate a unique id and assign to the user
    newUser.temporary_token = jwt.sign({ username: user.first_name + user.last_name, email: user.email }, secret, { expiresIn: '24h' }); //generate the temporary token and store.
    newUser.save(resultCallback);
};

    // API for login function
    exports.login = function (user, res){
        User.findOne({ email: user.email}, function(err, dbUser){
            if(err) throw err;
            if(!dbUser){ // checking if the user exists
                res.json({success: false, message: 'No user found please Register'});
            }
            else if(dbUser && (dbUser.password !== user.password)){ //if the user exists and is email id and password matches
                res.json({success: false, message: 'User email or password did not match'});
            }
            else if(dbUser && (dbUser.password === user.password) && (dbUser.is_verified === false)){ //if the user exists and the email id password matches and if whether the user has verified his account
                res.json({success: false, message: 'User is not verified'});
            }
            else{
                res.status(200);
                res.json({success: true, loggedUser: dbUser.user_id, role:dbUser.role});
            }
        })
    }

    exports.updateProgress = function(req,res){
        let userid = req.user_id;
        let courseid = req.course_id;
        let courses;
        
        User.findOne({user_id:userid},function(err,user){
            if(err){
            } 
                courses=user.courses_enrolled;
                courses.forEach(course =>{
                    if(course.course_id === courseid)
                    {
                        course.progress = req.progress;
                        course.lastSlideIndex = req.current_page;
                        user.save().then(user =>{
                            res.json('Update done.');
                        }).catch(err=>{
                            res.status(400).send('Update failed');
                        });
                    }
                });
             
        });
    }

//API to get the list of users
exports.display = (req, res) => {
    var users = User.find({}).select('email first_name last_name');
    users.exec(function (err, users) {
        if (err)
            throw err;
        else {
            res.json(users);
        }
    });
}
