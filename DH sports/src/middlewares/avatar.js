const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/images/avatars');
  },
  filename: function(req, file, cb) {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
});

const uploadFile = multer({ storage: storage });

function fileUpload(req, res, next) {
  uploadFile.single('avatar')(req, res, err => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
}

module.exports = fileUpload;