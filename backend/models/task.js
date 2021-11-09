'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      models.Task.belongsTo(models.User)
      models.Task.belongsTo(models.Categorie)
    }
  };
  Task.init({
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CategorieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};