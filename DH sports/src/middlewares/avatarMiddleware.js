const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {     
  cb(null, path.resolve('./public/images/avatars'));   
},
filename: (req, file, cb) => {
    let imagen = Date.now() + path.extname(file.originalname);
    cb(null, imagen);
  }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;