const router = require('express').Router()
const { Bean } = require('../models')

// GET all beans
router.get('/beans', (req, res) => {
  Bean.findAll()
    .then(beans => res.json(beans))
    .catch(err => console.log(err))
})

// GET one bean
router.get('/beans/:id', (req, res) => {
  Bean.findOne({ where: { id: req.params.id }, include: [Pet] })
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})

// POST one bean
router.post('/beans', (req, res) => {
  Bean.create(req.body)
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})

// PUT one bean
router.put('/beans/:id', (req, res) => {
  Bean.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one bean
router.delete('/beans/:id', (req, res) => {
  Bean.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router