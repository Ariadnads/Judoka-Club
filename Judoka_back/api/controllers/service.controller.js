const Service = require('../models/service.model')
const User = require('../models/user.model')
const sequelize = require('../../db')
const { Op } = require('sequelize') 


async function getAllService(req, res) {
    try {
        const service = await Service.findAll()
        if (service) {
            return res.status(200).json(service)
        } else {
            return res.status(404).send('No services found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneService(req, res) {
    try {
        const service = await Service.findByPk(req.params.id)
        if (service) {
            return res.status(200).json(service)
        } else {
            return res.status(404).send('Service not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createService(req, res) {
    console.log(req.body)
    try {
        const service = await Service.create(req.body)
        return res.status(200).json({ message: 'Service created', service: service })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateService(req, res) {
    try {
        const [serviceExist, service] = await Service.update(req.body, {
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

async function deleteService(req, res) {
    try {
        const service = await Service.destroy({
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
    getAllService,
    getOneService,
    createService,
    updateService,
    deleteService,
  
}