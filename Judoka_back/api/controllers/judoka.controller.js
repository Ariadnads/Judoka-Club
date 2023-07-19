const Dojo = require('../models/dojo.model')
const Judoka = require('../models/judoka.model')
const User = require('../models/user.model')

async function getAllJudokas(req, res) {
    try {
        const judokas = await Judoka.findAll()
        if (judokas) {
            return res.status(200).json(judokas)
        } else {
            return res.status(404).send('No judokas found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneJudoka(req, res) {
    try {
        const judoka = await Judoka.findByPk(req.params.id)
        const judoka2 = await Judoka.findOne({
            where: {
                id: req.params.id
            },
            include: Dojo
        })
        if (judoka2) {
            return res.status(200).json(judoka2)
        } else {
            return res.status(404).send('Judoka not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createJudoka(req, res) {
   
    try {
        console.log(req.body.userEmail)
        const judoka = await Judoka.create(req.body)
        const user = await User.findOne({
            where: {
                email: req.body.userEmail
            }
        })
        //const dojo = await Dojo.findByPk(req.body.dojoId)
        console.log(user)
        await user.addJudoka(judoka)
        //console.log(dojo)
        return res.status(200).json({ message: 'Judoka created', judoka: judoka })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateJudoka(req, res) {
    try {
        const [judokaExist, judoka] = await Judoka.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (judokaExist !== 0) {
            return res.status(200).json({ message: 'Judoka updated', judoka: judoka })
        } else {
            return res.status(404).send('Judoka not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteJudoka(req, res) {
    try {
        const judoka = await Judoka.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (judoka) {
            return res.status(200).json('Judoka deleted')
        } else {
            return res.status(404).send('Judoka not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllJudokas,
    getOneJudoka,
    createJudoka,
    updateJudoka,
    deleteJudoka,

}