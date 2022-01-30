const verifySignUp = require("../middlewares/verifySignUp");
const controller = require("../controllers/auth.controller");
const User = require("../models/user.model");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/", (req, res) => {
    res.send({ message: "connected" });
  });
  app.post(
    "/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.signup
  );

  app.get("/leader", (req, res) => {
    User
      .find()
      .sort({points: -1})
      .then((result) => {
        res.send(result);
        console.log("leaderboard");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  

  app.post("/signin", controller.signin);
};
