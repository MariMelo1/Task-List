const {Task} = require("../models");

exports.listByUserId = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findOne({
    where: {
      UserId: id,
    }
  });
  res.json(tasks);
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({
    where: {
      id,
    }
  });
  if (!!task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
};

exports.create = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.json(newTask);
};

exports.update = async (req, res) => {
  const { id } = req.params;

  const updateTask = await Task.update(req.body, {
    where: {
      id,
    },
  });
  res.json({ success: !!updateTask });
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const {status} = req.body
  const updateTask = await Task.update({status}, {
    where: {
      id,
    },
  });
  res.json({ success: !!updateTask });
};


exports.delete = async (req, res) => {
  const { id } = req.params;

  const deleteTask = await Task.destroy({
    where: {
      id,
    },
  });
  res.json({ success: !!deleteTask });
};
