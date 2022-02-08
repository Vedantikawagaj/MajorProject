const mongoose = require("mongoose");
var autoIncrementuser = require('mongoose-auto-increment');
 
autoIncrementuser.initialize(mongoose);

var examschema = new mongoose.Schema({
  examid: Number,
  title: String,
  duration: Date,
  totalMarks: Number
})

examschema.plugin(autoIncrementuser.plugin, {
  model: 'Exam',
  field: 'examid',
  startAt: 1001
});

const Exam = mongoose.model(
  "Exam", examschema
  
);

module.exports = Exam;
