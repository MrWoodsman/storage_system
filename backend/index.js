const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serwowanie statycznych plików frontendu (z folderu frontend/dist)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Przykładowe API
app.get('/api/test', (req, res) => {
    res.json({ message: 'API działa!' });
});

// Wszystkie inne trasy kierują na frontend (dla React Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(1000, '0.0.0.0', () => {
    console.log('Usługa działa na porcie 1000');
});