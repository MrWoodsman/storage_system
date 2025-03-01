#!/usr/bin/env node

const { program } = require('commander');
const { spawn } = require('child_process');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const backendDir = path.join(rootDir, 'backend');

program
    .version('1.0.0')
    .command('start')
    .description('Uruchamia system przechowywania')
    .action(() => {
        console.log("Uruchamianie usłgui Storage's")
        const services = spawn('node', ['index.js'], { cwd: backendDir, stdio: 'inherit' })

        services.on('error', (err) => console.error(`Błąd backendu: ${err}`));
    });

program.parse(process.argv);