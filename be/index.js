const express = require("express");
const bodyParser = require('body-parser')
const http = require("http");
const socketIO = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const { GlobSync } = require('glob');

dotenv.config();

const app = express();

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

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
