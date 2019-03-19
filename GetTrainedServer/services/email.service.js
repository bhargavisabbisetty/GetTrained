let nodemailer = require('nodemailer'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    jwt = require('jsonwebtoken');

let secret = 'trainingModule'; //salt secret for jwt token for activation link.

//send email to user after registration
exports.sendMail = (user) => {
    let activateSubject = 'Account Activation Link',
        activateHtml = 'Hello, <strong>'+ user.first_name + ' ' + user.last_name + '<strong><br><br>Please click on link below to activate your account: <br><br><a href=`http://localhost:4200/activate/' + user.temporary_token + '`> http://localhost:4200 </a>',
        activeSubject = 'Account has been activated',
        activeHtml = 'Hello, <strong>'+ user.first_name + ' ' + user.last_name + '<strong><br><br>Your account has been activated!';

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pixelweb29@gmail.com',
                pass: 'Pixel@123'
            }
        });
        const mailOptions = {
            from: 'amansr95@gmail.com',
            to: user.email,
            subject: user.is_verified? activeSubject: activateSubject,
            html: user.is_verified? activeHtml: activateHtml
        };
        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            }else{
                console.log(info.messageId);
                console.log(nodemailer.getTestMessageUrl(info));
            }
        });
}

//activate the user account by clicking on activation link.
exports.activate = (req, res) => {
    User.findOne({ temporary_token: req.params.token }, function(err, user){
        if(err) throw err;
        var token = req.params.token;
        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                res.json({ success: false, message: 'Activation link has expired'});
            }else if(!user){
                res.json({ success: false, message: 'Activation link has expired'});
            }else {
                user.temporary_token = false;
                user.is_verified = true;
                user.save((err)=> {
                    if(err){
                        console.log(err);
                    }else{
                        exports.sendMail(user);
                        res.json({ success: true, message: 'Account has been activated' });
                    }
                });
            }
        })
    });
}


exports.invite = (course) => {
    let inviteSubject = 'GetTrained: Course enrollment nomination',
        inviteHtml = 'Hello,<br><br>You have been invited for enrolling into course. Please log in on the below link to view your enrolled course:<br><br><a href=`http://localhost:4200/> http://localhost:4200 </a>';

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pixelweb29@gmail.com',
                pass: 'Pixel@123'
            }
        });
        const mailOptions = {
            from: 'pixelweb29@gmail.com',
            bcc: course.course_learners,
            subject: inviteSubject,
            html: inviteHtml
        };
        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            }else{
                console.log(info.messageId);
                console.log(nodemailer.getTestMessageUrl(info));
            }
        });
}