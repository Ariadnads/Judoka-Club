const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Service = sequelize.define('service', {

  name_of_service: {
    type: DataTypes.STRING,
    
  },
  description: {
    type: DataTypes.TEXT,
    
  },
  cost: {
    type: DataTypes.DECIMAL,
    
  }

})

module.exports = Service
