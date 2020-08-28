const Bean = require('./bean.js')
const Drink = require('./drink.js')
const Syrup = require('./syrup.js')
const Topping = require('./topping.js')

Bean.hasMany(Drink)
Syrup.hasMany(Drink)
Topping.hasMany(Drink)

Drink.belongsTo(Bean)
Drink.belongsTo(Syrup)
Drink.belongsTo(Topping)

module.exports = { Drink, Bean, Syrup, Topping }