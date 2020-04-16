const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const Chatkit = require('@pusher/chatkit-server');

const app = express();
const chatkit = new Chatkit.default(require('./config.js'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static(path.join(__dirname, 'assets')))