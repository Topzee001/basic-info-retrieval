const express = require('express');
const cors = require('cors');
const getRouter = require('./routes/router');
const app = express();

//enable cors
app.use(cors());

//create json middleware
app.use(express.json());

//route
app.use('/', getRouter);

module.exports = app;
