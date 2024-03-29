const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get("/api/test/viewuser", [authJwt.verifyToken, authJwt.isteacher], controller.viewallUsers);


  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isteacher],
    controller.adminBoard
  );
};
