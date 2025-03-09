const express = require('express')
const router = express.Router()
const { database } = require('../data')

// Pobieranie wszystkich pudełek
router.get('/boxes', (req, res) => {
    res.json(database.boxes)
})

module.exports = router