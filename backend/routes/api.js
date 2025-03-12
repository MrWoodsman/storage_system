const express = require('express')
const router = express.Router()
const { database } = require('../data')

// API's /api/.....

// Pobieranie wszystkich pudełek
router.get('/boxes', (req, res) => {
    res.json(database.boxes)
})

// Pobieranie wszystkich lokacji
router.get('/locations', (req, res) => {
    res.json(database.locations)
})

// Pobieranie wszystkich przedmiotów
router.get('/items', (req, res) => {
    res.json(database.items)
})

// Pobieranie danych o wybranym pudełku
router.get('/boxes/:id', (req, res) => {
    const boxId = req.params.id; // Pobiera wartość 'id' z URL
    const box = database.boxes.find((box) => box.id == boxId);
    res.json(box);
});

module.exports = router