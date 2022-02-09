
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
    "/api/question/gq",
    controller.generateQuestion
  );
  app.post(
    "/api/exam/ge/:uid",
    controller.generateExam
  );
  app.get("/api/exam/ve", controller.viewExam);
  app.delete("/api/exam/de/:examid", controller.deleteExam);
  app.put("/api/exam/ue/:examid", controller.updateExam);
  app.get("/api/question/vq/:examid", controller.viewQuestion);
  app.delete("/api/question/dq/:qid", controller.deleteQuestion);
  app.put("/api/question/uq/:qid", controller.updateQuestion);
};