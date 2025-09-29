const router = require("express").Router();
const authController = require('../controllers/authController');
const multer = require("multer");
const path = require("path");
const File = require("../models/file")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
        cb(null, 'src/assets/avatar/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage }).any();

router.post('/file_upload', (req, res) => {
  
  upload(req, res, async(err) => {
    console.log("----->", req.files)
        try {
            let files = req.files.map((ff) => ({ filename: ff.filename, originalname: ff.originalname }))
            const result = await File.insertMany(files);
            const data = result.map((item) => ({filename: item.filename, originalname: item.originalname}));
            res.send({type: 'success', data});
        } catch (error) {
            
        }
    })
});

router.get("/:filename", (req, res) => {
    res.download(`src/assets/avatar/${req.params.filename}`, req.params.filename)
})

module.exports = router;