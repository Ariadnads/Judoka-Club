const router = require('express').Router()
//const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllDojos, getOneDojo, createDojo, updateDojo, deleteDojo } = require('../controllers/dojo.controller')

router.get('/',  getAllDojos)
router.get('/:id',  getOneDojo)
router.post('/', createDojo)
router.put('/:id',updateDojo)
router.delete('/:id', deleteDojo)



module.exports = router