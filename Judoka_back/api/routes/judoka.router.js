const router = require('express').Router()
//const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllJudokas, getOneJudoka, createJudoka, updateJudoka, deleteJudoka } = require('../controllers/judoka.controller')

router.get('/',  getAllJudokas)
router.get('/:id',  getOneJudoka)
router.post('/', createJudoka)
router.put('/:id',updateJudoka)
router.delete('/:id', deleteJudoka)



module.exports = router