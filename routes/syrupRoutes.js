const router = require('express').Router()
const { Syrup } = require('../models')

// GET all syrups
router.get('/syrups', (req, res) => {
  Syrup.findAll()
    .then(syrups => res.json(syrups))
    .catch(err => console.log(err))
})

// GET one syrup
router.get('/syrups/:id', (req, res) => {
  Syrup.findOne({ where: { id: req.params.id }, include: [Pet] })
    .then(syrup => res.json(syrup))
    .catch(err => console.log(err))
})

// POST one syrup
router.post('/syrups', (req, res) => {
  Syrup.create(req.body)
    .then(syrup => res.json(syrup))
    .catch(err => console.log(err))
})

// PUT one syrup
router.put('/syrups/:id', (req, res) => {
  Syrup.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one syrup
router.delete('/syrups/:id', (req, res) => {
  Syrup.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router