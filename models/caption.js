'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    static associate(models) {
      Caption.belongsTo(models.Photo,{
        foreignKey: 'photo_id',
        as: 'photo'
      });
      Caption.belongsTo(models.User,{
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }
  Caption.init({
    photo_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};