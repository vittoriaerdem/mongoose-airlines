var Flight = require('../models/flight');
var Destinations = require('../models/flight');

module.exports = {
    new: newFlight,
  };

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
  }