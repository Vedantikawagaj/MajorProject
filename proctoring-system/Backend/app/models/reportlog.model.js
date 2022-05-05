const mongoose = require("mongoose");
var autoIncrementuser = require('mongoose-auto-increment');
 
autoIncrementuser.initialize(mongoose);

var reportlogchema = new mongoose.Schema({
   
  userid:Number,
  examid: Number,
  log: String,
  _id:Number,
  timestamp: Date
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
