const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', { 
  name: {
    type: DataTypes.STRING,
    
  },
  lastName: {
    type: DataTypes.STRING,
    
  },
  email: {
    type: DataTypes.STRING,
    /* allowNull: false, */
    unique: true
   },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 100],
    }
  },

 
})

module.exports = User
