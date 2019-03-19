let imageController = require('../controllers/image.controller'),
multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })
  
let upload = multer({ storage: storage });

module.exports = (app) => {
    app.route('/images')
    .get()
    .post(upload.single('myFile'), imageController.save);
}