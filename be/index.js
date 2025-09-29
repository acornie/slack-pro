const express = require("express");
const bodyParser = require('body-parser')
const http = require("http");
const socketIO = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
// const { GlobSync } = require('glob');
// const multer = require('multer');
const path = require('path');
const fs = require('fs');


dotenv.config();

const app = express();

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use('/avatar', express.static("src/assets/avatar"));


// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const filename = Date.now() + '-' + file.originalname;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

// // Upload endpoint
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }
//   res.json({ filename: req.file.filename });
// });

// // Download endpoint
// app.get('/download/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const filepath = path.join(uploadDir, filename);

//   fs.access(filepath, fs.constants.F_OK, (err) => {
//     if (err) {
//       return res.status(404).json({ message: 'File not found' });
//     }
//     res.download(filepath, filename);
//   });
// });



require('./src/models/channel');
require('./src/models/user');
require('./src/models/message');

require("./src/routes")(app);

const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ['GET', 'POST'],
  },
});

const { onConnect: onSocketConnect } = require("./src/routes/socket");

io.on("connection", onSocketConnect);

const port = process.env.PORT;

server.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  try {
    const host = process.env.DB_HOST;
    const db = process.env.DB_NAME;

    await mongoose.connect(`mongodb://${host}/${db}`);

    console.log('MongoDB is connected');
  } catch (err) {
    console.error(err);
  }
});


