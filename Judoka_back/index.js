require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./db')
const createRelations = require('./db/relationships')

const router = require('./api/routes')

const app = express()

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    createRelations()
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.log(error)
    throw new Error('Cannot connect to DB')
  }
}

const start = async () => {
  
  try {

    app.use(express.json())
    app.use(morgan('combined'));
    app.use(cors()); 
    //app.get('/api', (req, res) => res.send('Welcome to Judoka API'))
    app.use('/api', router)
    app.listen(process.env.PORT || 2222)
    await connectDB()
    console.info(`Judoka API running on port ${process.env.PORT}`)

  } catch (error) {
    console.log(error)
    throw new Error(`Cannot start server on ${process.env.PORT}`)
  }
}

start()
