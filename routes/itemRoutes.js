const { Item } = require('../models')

module.exports = app => {
  app.get('/items', (req, res) => {
    Item.findAll()
      .then(items => res.json(items))
      .catch(e => console.error(e))
  })

  app.post('/items', (req, res) => {
    Item.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/items/:id', (req, res) => {
    Item.findOne({ where: { id: parseInt(req.params.id) } })
      .then(item => item.update({ isDone: !item.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/items/:id', (req, res) => {
    Item.findOne({ where: { id: parseInt(req.params.id) } })
      .then(item => item.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}