const Contracted_service = require('../models/contracted_service.model')
const User = require('../models/user.model')
const sequelize = require('../../db')
const { Op } = require('sequelize') 


async function getAllContracted_service(req, res) {
    try {
        const contractedService = await Contracted_service.findAll()
        if (service) {
            return res.status(200).json(service)
        } else {
            return res.status(404).send('No services found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneContracted_service(req, res) {
    try {
        const contractedService = await Contracted_service.findByPk(req.params.id)
        if (service) {
            return res.status(200).json(service)
        } else {
            return res.status(404).send('Service not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createContracted_service(req, res) {
    console.log(req.body)
    try {
        const contractedService = await Contracted_service.create(req.body)
        return res.status(200).json({ message: 'Service created', service: service })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateContracted_service(req, res) {
    try {
        const [serviceExist, service] = await Contracted_service.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (serviceExist !== 0) {
            return res.status(200).json({ message: 'Service updated', service: service })
        } else {
            return res.status(404).send('Service not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteContracted_service(req, res) {
    try {
        const service = await Contracted_service.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (service) {
            return res.status(200).json('Service deleted')
        } else {
            return res.status(404).send('Service not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllContracted_service,
    getOneContracted_service,
    createContracted_service,
    updateContracted_service,
    deleteContracted_service,
  
}