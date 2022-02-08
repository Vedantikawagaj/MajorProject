const mongoose = require("mongoose");
var autoIncrementuser = require('mongoose-auto-increment');
 
autoIncrementuser.initialize(mongoose);

var questionschema = new mongoose.Schema({
  examid: Number,
  question: String,
  a:String,
  b:String,
  c:String,
  d:String,
  ans: String,
  marks: Number
})

questionschema.plugin(autoIncrementuser.plugin, {
  model: 'Question',
  field: '_id',
  startAt: 6001
});

const Question = mongoose.model(
  "Question", questionschema
  
);

module.exports = Question;
