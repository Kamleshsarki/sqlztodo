const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:password@localhost/todo_db')
