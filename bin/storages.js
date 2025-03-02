#!/usr/bin/env node

const { program } = require('commander');
const { spawn } = require('child_process');
const readline = require('readline');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const backendDir = path.join(rootDir, 'backend');
const frontendDir = path.join(rootDir, 'frontend');

let currentPort = 1000;
let backendProcess;

program
    .version('1.0.0')
    .command('start')
    .description('Uruchamia usługę przechowywania i akceptuje komendy')
    .action(() => {
        console.log('Uruchamianie usługi Storage System...');
        backendProcess = startBackend(currentPort);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: ''
        });

        rl.prompt();

        rl.on('line', (input) => {
            const commandParts = input.trim().split(' ');
            const command = commandParts[0].toLowerCase();
            const arg = commandParts[1];

            switch (command) {
                case 'reload':
                    console.log('Przebudowuję frontend i restartuję usługę...');
                    rebuildFrontend(() => {
                        stopBackend(backendProcess, () => {
                            backendProcess = startBackend(currentPort);
                        });
                    });
                    break;
                case 'stop':
                    console.log('Zatrzymuję usługę...');
                    stopBackend(backendProcess, () => rl.close());
                    break;
                case 'help':
                    console.log('Dostępne komendy:\n - reload\n - stop\n - change-port <port>\n - help');
                    break;
                case 'change-port':
                    if (!arg || isNaN(arg)) {
                        console.log('Podaj poprawny numer portu, np. "change-port 3000"');
                    } else {
                        const newPort = parseInt(arg);
                        console.log(`Zmieniono port na ${newPort}`);
                        currentPort = newPort;
                        stopBackend(backendProcess, () => {
                            backendProcess = startBackend(currentPort);
                        });
                    }
                    break;
                default:
                    console.log('Nieznana komenda. Wpisz "help" po listę.');
            }
            rl.prompt();
        });

        rl.on('close', () => {
            console.log('Usługa zatrzymana.');
            process.exit(0);
        });
    });

program.parse(process.argv);

function startBackend(port) {
    // console.log('Uruchomiono backend na porcie', port);
    const backend = spawn('node', ['index.js', port], {
        cwd: backendDir,
        stdio: 'inherit',
    });

    backend.on('error', (err) => console.error(`Błąd backendu: ${err}`));
    backend.on('exit', (code) => {
        console.log('Zakończono backend z kodem', code);
    });

    return backend;
}

function stopBackend(process, callback) {
    process.kill('SIGTERM'); // Próbujemy SIGTERM
    process.on('exit', (code) => {
        console.log('Backend zatrzymany z kodem', code);
        callback();
    });

    // Fallback dla Windows, jeśli SIGTERM nie działa
    setTimeout(() => {
        if (!process.killed) {
            console.log('SIGTERM nie zadziałał, wymuszam zatrzymanie...');
            process.kill(); // Domyślny SIGKILL
            callback();
        }
    }, 1000); // Czekamy 1 sekundę na SIGTERM
}

function rebuildFrontend(callback) {
    const build = spawn('cmd.exe', ['/c', 'npm', 'run', 'build'], {
        cwd: frontendDir,
        stdio: 'ignore',
    });

    build.on('close', (code) => {
        if (code === 0) {
            console.log('Frontend przebudowany pomyślnie.');
            callback();
        } else {
            console.error('Błąd podczas budowania frontendu.');
        }
    });
}