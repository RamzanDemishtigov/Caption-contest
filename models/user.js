'use strict';
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const jwt = require('jsonwebtoken');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Caption,{
        foreignKey: 'user_id',
        as: 'caprions'
      })
    }

    generateToken(){
      return jwt.sign({
        id: this.id,
        email: this.email
      },
      config.privateKey);
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique:true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required:true,
      len: [8,20]
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};