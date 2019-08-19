var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
      type: String,
      required: true,
      enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
    },
    departs: {
      type: Date,
      default: function () {
        var date = new Date();
        date.setFullYear(date.getFullYear() + 1)
        return date.toLocaleDateString();}
    }});
  
    module.exports = mongoose.model('Flight', flightSchema);