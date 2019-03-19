let categoryService = require('../services/category.service')

exports.post = function (request, response) {
    let newCategory = Object.assign({}, request.body);
    categoryService.save(newCategory, function (category) {
        response.status(200);
        response.json(category);
    },function(errMsg){
        response.status(400).send(errMsg);
    });
};

exports.display = (req, res, err) => {
    categoryService.display(req, res);
}

 exports.delete = function (req, res) {
    categoryService.delete(req,res);
};