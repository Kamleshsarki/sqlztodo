const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Item: require('./Item.js')(sequelize, Model, DataTypes)
}
