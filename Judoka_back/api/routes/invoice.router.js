const router = require('express').Router()
//const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllInvoices, getOneInvoice, createInvoice, updateInvoice, deleteInvoice } = require('../controllers/invoice.controller')

router.get('/',  getAllInvoices)
router.get('/:id',  getOneInvoice)
router.post('/', createInvoice)
router.put('/:id',updateInvoice)
router.delete('/:id', deleteInvoice)



module.exports = router