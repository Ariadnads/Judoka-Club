const Invoice = require('../models/invoice.model')

async function getAllInvoices(req, res) {
    try {
        const invoices = await Invoice.findAll()
        if (invoices) {
            return res.status(200).json(invoices)
        } else {
            return res.status(404).send('No invoices found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneInvoice(req, res) {
    try {
        const invoice = await Invoice.findByPk(req.params.id)
        if (invoice) {
            return res.status(200).json(invoice)
        } else {
            return res.status(404).send('Invoice not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createInvoice(req, res) {
    try {
        const invoice = await Invoice.create(req.body)
        return res.status(200).json({ message: 'Invoice created', invoice: invoice })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateInvoice(req, res) {
    try {
        const [invoiceExist, invoice] = await Invoice.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (invoiceExist !== 0) {
            return res.status(200).json({ message: 'Invoice updated', invoice: invoice })
        } else {
            return res.status(404).send('Invoice not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteInvoice(req, res) {
    try {
        const invoice = await Invoice.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (invoice) {
            return res.status(200).json('Invoice deleted')
        } else {
            return res.status(404).send('Invoice not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllInvoices,
    getOneInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,

}