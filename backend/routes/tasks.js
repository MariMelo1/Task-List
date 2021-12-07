const tasks = require("../controllers/tasks");
const {authMiddleware} = require("../utils/authMiddleware");

module.exports = function (app) {
  app.get("/tasks/user/:id",authMiddleware, tasks.listByUserId);
  app.get("/tasks/date/user/:id",authMiddleware, tasks.listByUserIdAndDate);
  app.get("/tasks/:id",authMiddleware, tasks.findOne);
  app.post("/tasks",authMiddleware,tasks.create);
  app.put("/tasks/:id",authMiddleware, tasks.update);
  app.delete("/tasks/:id",authMiddleware, tasks.delete);
  app.put("/task/status/:id",authMiddleware, tasks.updateStatus)
};
