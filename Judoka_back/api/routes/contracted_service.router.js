const router = require('express').Router()

//const checkAuth = require('../../middlewares/auth.middlewares')
const {                                                                         
    getAllContracted_service,
    getOneContracted_service,
    createContracted_service,
    updateContracted_service,
    deleteContracted_service,
   } = require('../controllers/contracted_service')

router.get('/', getAllContracted_service)
router.get('/:id',  getOneContracted_service)
router.post('/', createContracted_service)
router.put('/:id', updateContracted_service)
router.delete('/:id', deleteContracted_service)

module.exports = router