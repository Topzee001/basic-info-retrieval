const express = require('express');
const getController = require('../controller/getController');

const router = express.Router();

router.route('/').get(getController.getRequest);

module.exports = router;
