const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const apiRoutes = require('./routes/api')

require('dotenv').config({ path: '../.env' }); // Wczytaj z głównego folderu
const PORT = process.env.VITE_API_PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/test', (req, res) => {
    res.json({ message: 'API działa!' });
});

app.use('/api', apiRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Usługa działa na porcie ${PORT}`);
});

// Debugowanie SIGTERM
process.on('SIGTERM', () => {
    console.log('Otrzymano SIGTERM, zaczynam zamykać serwer...');
    server.close(() => {
        console.log('Serwer zamknięty pomyślnie.');
        process.exit(0); // Wyraźne zakończenie z kodem 0
    });
});

// Dodatkowe logowanie dla debugowania
process.on('exit', (code) => {
    console.log(`Proces kończy się z kodem ${code}`);
});