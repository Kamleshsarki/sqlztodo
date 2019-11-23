module.exports = (sequelize, Model, DataTypes) => {
  class Item extends Model { }

  Item.init({
    text: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'item'})

  return Item
}