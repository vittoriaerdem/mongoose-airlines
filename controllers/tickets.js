var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,  
  create,
  addToFlight
};

function newTicket(req, res) {
  Ticket.find({}, function(err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      tickets
    });
  })
}
  
function create(req, res) {
// Hack to "fix" date formatting to prevent possible day off by 1
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  var s = req.body.born;
  req.body.born = 
    `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;
  Performer.create(req.body, function(err, ticket) {
    res.redirect('/tickets/new');
  });
}

function addToFlight(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.cast.push(req.body.ticketId);
    flight.save(function(err) {
      res.redirect(`/flights`);
    });
  });
}