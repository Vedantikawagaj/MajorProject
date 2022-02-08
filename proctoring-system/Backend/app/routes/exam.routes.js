
const controller = require("../controllers/exam.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/exam/gq",
    controller.generateQuestion
  );
  app.post(
    "/api/exam/ge",
    controller.generateExam
  );
  app.get("/api/exam/ve", controller.viewExam);
  app.delete("/api/exam/de/:examid", controller.deleteExam);
  app.put("/api/exam/ue/:examid", controller.updateExam);
};