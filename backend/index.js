const express = require('express');
const path = require('path');
const app = express();

const port = process.argv[2] || 1000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/test', (req, res) => {
    res.json({ message: 'API działa!' });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Usługa działa na porcie ${port}`);
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