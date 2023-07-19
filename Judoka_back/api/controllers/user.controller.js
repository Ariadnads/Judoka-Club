const Dojo = require('../models/dojo.model')
const Judoka = require('../models/judoka.model')
const User = require('../models/user.model')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll()
        if (users) {
            return res.status(200).json(users)
        } else {
            return res.status(404).send('No users found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createUser(req, res) {
    //console.log(req.body)
    try {
        const user = await User.create(req.body)
        return res.status(200).json({ message: 'User created', user: user })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateUser(req, res) {
    try {
        const [userExist, user] = await User.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (userExist !== 0) {
            return res.status(200).json({ message: 'User updated', user: user })
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (user) {
            return res.status(200).json('User deleted')
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



async function getUserAndJudokaInfo(req, res) {
    try {
        console.log(req.params.email)
        const user = await User.findOne({
            where: {
                email: req.params.email
            },
            include: {
                model: Judoka,
                include: Dojo
            }
        })
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('Judoka not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    getUserAndJudokaInfo
}