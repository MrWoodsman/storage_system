const express = require('express')
const router = express.Router()
const { database } = require('../data')

// API's /api/.....

// Pobieranie wszystkich pudełek
router.get('/boxes', (req, res) => {
    res.json(database.boxes)
})

router.get('/locations', (req, res) => {
    res.json(database.locations)
})

module.exports = router