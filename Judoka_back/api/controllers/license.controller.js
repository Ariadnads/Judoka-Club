const License = require('../models/license.model')

async function getAllLicenses(req, res) {
    try {
        const licenses = await License.findAll()
        if (licenses) {
            return res.status(200).json(licenses)
        } else {
            return res.status(404).send('No licenses found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneLicense(req, res) {
    try {
        const license = await License.findByPk(req.params.id)
        if (license) {
            return res.status(200).json(license)
        } else {
            return res.status(404).send('License not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createLicense(req, res) {
    
    try {
        const license = await License.create(req.body)
        return res.status(200).json({ message: 'License created', license: license })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateLicense(req, res) {
    try {
        const [licenseExist, license] = await License.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (licenseExist !== 0) {
            return res.status(200).json({ message: 'License updated', license: license })
        } else {
            return res.status(404).send('License not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteLicense(req, res) {
    try {
        const license = await License.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (license) {
            return res.status(200).json('License deleted')
        } else {
            return res.status(404).send('License not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllLicenses,
    getOneLicense,
    createLicense,
    updateLicense,
    deleteLicense,

}