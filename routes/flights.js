var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/flight', flightsCtrl.new);

module.exports = router;
