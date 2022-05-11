'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.hasMany(models.Caption,{
        foreignKey: 'photo_id',
        as: 'captions'
      })
    }
  }
  Photo.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    citation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};