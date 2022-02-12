const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["student", "teacher"];
db.question = require("./question.model");
db.exam = require("./exam.model");
module.exports = db;