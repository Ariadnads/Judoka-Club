const router = require('express').Router()

const userRouter = require('./user.router.js')
const authRouter = require('./auth.router.js')

const serviceRouter = require ('./service.router.js')
const contracted_serviceRouter = require ('./contracted_service.router.js')
const dojo = require ('./dojo.router.js')
const license = require ('./license.router.js')
const judoka = require ('./judoka.router.js')


router.use('/user', userRouter)
router.use('/auth', authRouter)

router.use('/service', serviceRouter)
router.use('/contracted_service', contracted_serviceRouter)
router.use('/dojo', dojo)
router.use('/license', license)
router.use('/judoka', judoka)



module.exports = router 