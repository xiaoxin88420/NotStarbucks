const router = require('express').Router()
const { Drink } = require('../models')

// GET all drinks
router.get('/drinks', (req, res) => {
  Drink.findAll()
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})

// GET one drink
router.get('/drinks/:id', (req, res) => {
  Drink.findOne({ where: { id: req.params.id }, include: [Pet] })
    .then(drink => res.json(drink))
    .catch(err => console.log(err))
})

// POST one drink
router.post('/drinks', (req, res) => {
  Drink.create(req.body)
    .then(drink => res.json(drink))
    .catch(err => console.log(err))
})

// PUT one drink
router.put('/drinks/:id', (req, res) => {
  Drink.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one drink
router.delete('/drinks/:id', (req, res) => {
  Drink.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router