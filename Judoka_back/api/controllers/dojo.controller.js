const Dojo = require('../models/dojo.model')

async function getAllDojos(req, res) {
    try {
        const dojos = await Dojo.findAll()
        if (dojos) {
            return res.status(200).json(dojos)
        } else {
            return res.status(404).send('No dojos found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneDojo(req, res) {
    try {
        const dojo = await Dojo.findByPk(req.params.id)
        if (dojo) {
            return res.status(200).json(dojo)
        } else {
            return res.status(404).send('Dojo not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createDojo(req, res) {
    //console.log(req.body)
    try {
        const dojo = await Dojo.create(req.body)
        return res.status(200).json({ message: 'Dojo created', dojo: dojo })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDojo(req, res) {
    try {
        const [dojoExist, dojo] = await Dojo.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (dojoExist !== 0) {
            return res.status(200).json({ message: 'Dojo updated', dojo: dojo })
        } else {
            return res.status(404).send('Dojo not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteDojo(req, res) {
    try {
        const dojo = await Dojo.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (user) {
            return res.status(200).json('Dojo deleted')
        } else {
            return res.status(404).send('Dojo not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllDojos,
    getOneDojo,
    createDojo,
    updateDojo,
    deleteDojo,

}