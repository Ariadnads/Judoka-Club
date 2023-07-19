const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Judoka = sequelize.define('judoka', {
  name: {
    type: DataTypes.STRING,
    
  },
  lastName: {
    type: DataTypes.STRING,
    
  },

  date_of_birth: {
    type: DataTypes.DATE,
   
  },
  nivel: {
    type: DataTypes.ENUM(['Cinturón Blanco', 'Cinturón Amarillo', 'Cinturón Naranja', 'Cinturón Verde', 'Cinturón Azul', 'Cinturón Marrón ', 'Cinturon Negro'])
  }
 
})

module.exports = Judoka
