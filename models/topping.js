const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Bean extends Model { }

Bean.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caffeine: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'bean' })

module.exports = Bean