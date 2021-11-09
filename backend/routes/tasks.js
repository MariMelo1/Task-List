const tasks = require("../controllers/tasks");

module.exports = function (app) {
  app.get("/tasks", tasks.listAll);
  app.get("/tasks/:id", tasks.findOne);
  app.post("/tasks", tasks.create);
  app.put("/tasks/:id", tasks.update);
  app.delete("/tasks/:id", tasks.delete);
};
