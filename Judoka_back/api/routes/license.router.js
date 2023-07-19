const router = require('express').Router()
//const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllLicenses, getOneLicense, createLicense, updateLicense, deleteLicense } = require('../controllers/license.controller')

router.get('/',  getAllLicenses)
router.get('/:id',  getOneLicense)
router.post('/', createLicense)
router.put('/:id',updateLicense)
router.delete('/:id', deleteLicense)



module.exports = router