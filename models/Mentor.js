var mongoose = require('mongoose');

var MentorSchema = new mongoose.Schema({
  isbn: String,
  Name: String,
  Company: String,
  Position: String,
  //published_date: { type: Date },
  //publisher: String,
  //updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mentor', MentorSchema);