const router = require('express').Router()
//const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser,getUserAndJudokaInfo } = require('../controllers/user.controller')


router.get('/:email',  getUserAndJudokaInfo)

router.get('/',  getAllUsers)
router.get('/:id',  getOneUser)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id', deleteUser)



module.exports = router