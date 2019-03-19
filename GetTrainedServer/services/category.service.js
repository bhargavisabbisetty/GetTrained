'use strict';
const mongoose = require('mongoose'),
    Category = mongoose.model('Categories');

let throwError = function (err, callback, msg) {
    callback(msg);
};

exports.save = function (category, callback, errCallback) {
    let newCategory = new Category(category);
    newCategory.save(function (err, category) {
        if (err) {
            throwError(err, errCallback, "Error saving category");
            return;
        }
        callback(category);
    });
};

exports.display = (req, res) => {
    Category.find(function (err, categories) {
        if (err)
            throw err;
        else {
            res.json(categories);
        }

    });
}

//API to delete category
exports.delete = (req, res) => {
    Category.findByIdAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.json('Error');
        }
        else
            res.json('Removed successfully');
    });
}