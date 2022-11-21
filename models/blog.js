const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );