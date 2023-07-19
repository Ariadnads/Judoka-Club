const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Invoice = sequelize.define('invoice', {

  user_id: {
    type: DataTypes.STRING,
    
  },
  pay_date: {
    type: DataTypes.DECIMAL,
    
  },
   status: {
    type: DataTypes.STRING,
 
  },
 
})

module.exports = Invoice
