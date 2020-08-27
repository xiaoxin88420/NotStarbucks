const router = require('express').Router()
const { Topping } = require('../models')

// GET all toppings
router.get('/toppings', (req, res) => {
  Topping.findAll()
    .then(toppings => res.json(toppings))
    .catch(err => console.log(err))
})

// GET one topping
router.get('/toppings/:id', (req, res) => {
  Topping.findOne({ where: { id: req.params.id }, include: [Pet] })
    .then(topping => res.json(topping))
    .catch(err => console.log(err))
})

// POST one topping
router.post('/toppings', (req, res) => {
  Topping.create(req.body)
    .then(topping => res.json(topping))
    .catch(err => console.log(err))
})

// PUT one topping
router.put('/toppings/:id', (req, res) => {
  Topping.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one topping
router.delete('/toppings/:id', (req, res) => {
  Topping.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router