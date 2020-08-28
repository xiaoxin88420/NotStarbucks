const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Bean = require('./bean.js')
const Syrup = require('./syrup.js')
const Topping = require('./topping.js')

class Drink extends Model { }

Drink.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'drink' })


module.exports = Drink