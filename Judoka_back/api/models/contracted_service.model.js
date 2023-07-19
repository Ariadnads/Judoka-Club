const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Contrated_service = sequelize.define('Contrated_service', {
 
  date_of_hiring: {
    type: DataTypes.DATE,
    
  }
 
})

module.exports = Contrated_service
