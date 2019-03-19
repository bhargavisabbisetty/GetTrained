module.exports = function (app) {
    //enabling creation of schema
    let userModel = require('./models/user.model');
    let queryModel = require('./models/query.model');
    let categoryModel = require('./models/category.model');
    let courseModel = require('./models/course.model');
    //providing routes context for our application
    let userRoutes = require('./routes/user.route');
    let queryRoutes = require('./routes/query.route');
    let categoryRoutes = require('./routes/category.route');
    let courseRoutes = require('./routes/course.route');
    let imageRoutes = require('./routes/images.route');
    userRoutes(app);
    queryRoutes(app);
    categoryRoutes(app);
    courseRoutes(app);
    imageRoutes(app);

}