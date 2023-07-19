const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Dojo = sequelize.define('dojo', {
  name: {
    type: DataTypes.STRING,
    
  },
  description: {
    type: DataTypes.TEXT,
    
  },
  minimum_age: {
    type: DataTypes.INTEGER,
    },
  maximum_age: {
    type: DataTypes.INTEGER,
    },
 
})

module.exports = Dojo
