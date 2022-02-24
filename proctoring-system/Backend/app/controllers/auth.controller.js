const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.signup = (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    image:req.body.imagelink
  });
 
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      console.log(err)
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            console.log(err)
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              console.log(err)
              return;
            }
            res.status(200).send({
              message: "User was registered successfully!"
              
            });
            
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          console.log(err)
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            console.log(err)
            return;
          }

          res.status(200).send({
            message: "User was registered successfully!"
            
          });
          
        });
      });
    }
  });
};


exports.signin = (req, res) => {
  // User.findOne({
  //   email: req.body.email
  // })
  //   .populate("roles", "-__v")
  //   .exec((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }

  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found.",
  //       status:404 });
  //     }

  //     var passwordIsValid = bcrypt.compareSync(
  //       req.body.password,
  //       user.password
  //     );

  //     if (!passwordIsValid) {
  //       return res.status(401).send({
  //         accessToken: null,
  //         message: "Invalid Password!",
  //         status:401
  //       });
  //     }

  //     var token = jwt.sign({ id: user.id }, config.secret, {
  //       expiresIn: 86400 // 24 hours
  //     });

  //     var authorities = [];

  //     for (let i = 0; i < user.roles.length; i++) {
  //       console.log(user.roles[i])
  //       authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  //     }
  //     res.status(200).send({
  //       message: "Login successful",
  //       id: user._id,
  //       firstname: user.firstname,
  //       lastname: user.lastname,
  //       email: user.email,
  //       roles: authorities,
  //       accessToken: token,
  //       status:200
  //     });
  //   });

  axios.post("http://127.0.0.1:5000/verify-image", {
    "image": req.body.imagelink
  }).then(
    (response) => {
        var result = response.data;
        console.log(result);
        res.status(200).send(result)
    },
    (error) => {
        console.log(error);
    }
);
};
