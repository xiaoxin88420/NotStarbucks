const Bean = require('./bean.js')
const Drink = require('./drink.js')
const Syrup = require('./syrup.js')
const Topping = require('./topping.js')

Drink.hasMany(Bean, Syrup, Topping)

module.exports = {Drink, Bean, Syrup, Topping }