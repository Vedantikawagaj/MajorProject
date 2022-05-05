const mongoose = require("mongoose");
var autoIncrementuser = require('mongoose-auto-increment');
 
autoIncrementuser.initialize(mongoose);

var reportlogchema = new mongoose.Schema({
   
  userid:Number,
  timestamp: Date,
  examid: Number,
  _id:Number,
  eye: String,
  head_move_1: String,
  head_move_2: String,
  mob: String,
  person: String

})

// reportlogchema.plugin(autoIncrementuser.plugin, {
//   model: 'Exam',
//   field: '_id',
//   startAt: 1001
// });

const ReportLog = mongoose.model(
  "ReportLog", reportlogchema
  
);

module.exports = ReportLog;
