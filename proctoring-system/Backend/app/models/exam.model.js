const mongoose = require("mongoose");
var autoIncrementuser = require('mongoose-auto-increment');
 
autoIncrementuser.initialize(mongoose);

var examschema = new mongoose.Schema({
  userid:Number,
  title: String,
  duration: Date,
  totalMarks: Number,
  examDate: Number,
  examMonth:Number,
  _id:Number
})

// examschema.plugin(autoIncrementuser.plugin, {
//   model: 'Exam',
//   field: '_id',
//   startAt: 1001
// });

const Exam = mongoose.model(
  "Exam", examschema
  
);

module.exports = Exam;
