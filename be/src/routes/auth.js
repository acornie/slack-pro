const router = require("express").Router();
const authController = require('../controllers/authController');
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/avatar')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix +  path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

router.post('/signup', upload.single("avatar"), authController.signUp);
router.post('/signin', authController.signIn);
router.get('/verify', authController.verify);
module.exports = router;