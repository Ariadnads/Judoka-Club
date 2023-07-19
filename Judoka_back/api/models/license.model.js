const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const License = sequelize.define('license', {

  license: {
    type: DataTypes.STRING,
    
  },
  judoka_id: {
    type: DataTypes.INTEGER,
    
  },
  license_number: {
    type: DataTypes.INTEGER,
 },
  status: {
    type: DataTypes.STRING,
 
  },
  image: {
    type: DataTypes.STRING,
   
  },
  expiration_date: {
    type: DataTypes.DATE,
    
  },
 
})

module.exports = License
