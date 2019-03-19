let imageService = require('../services/image.service');

exports.save = (req, res) => {
    imageService.saveImage(req, res);
}