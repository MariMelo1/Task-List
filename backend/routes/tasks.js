const tasks = require("../controllers/tasks");

module.exports = function (app) {
  app.get("/tasks/user/:id", tasks.listByUserId);
  app.get("/tasks/:id", tasks.findOne);
  app.post("/tasks", tasks.create);
  app.put("/tasks/:id", tasks.update);
  app.delete("/tasks/:id", tasks.delete);
  app.put("/task/status/:id", tasks.updateStatus)
};
