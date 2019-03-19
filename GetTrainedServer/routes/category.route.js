module.exports = (app) => {
    const categoryController = require('../controllers/category.controller');

    app.route('/categories').post(categoryController.post); //route to add a category
    app.route('/categories').get(categoryController.display); //route to display all categories
    app.route('/categories/:id').delete(categoryController.delete); //route to delete a specific category
};