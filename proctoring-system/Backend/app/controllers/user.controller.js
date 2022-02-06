const db = require("../models");

const Role = db.role;
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.viewallUsers = (req, res) => {
  
  User.find()
    .then(data => {
      if (!data)
        res.status(404).send({ message: "User not found!!!" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User information!!!"  });
    });
};


