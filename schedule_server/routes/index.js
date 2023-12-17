const express = require('express')
const router = new express.Router()
const profileRouter = require('./profileRouter')
const eventRouter = require('./eventRouter')
const scheduleRouter = require('./scheduleRouter')

router.use('/profile', profileRouter)
router.use('/schedule', scheduleRouter)
router.use('/event', eventRouter)

// router.use('/notifications', )



module.exports = router