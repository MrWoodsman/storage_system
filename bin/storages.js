#!/usr/bin/env node

const { program } = require('commander');
const { spawn } = require('child_process');
const readline = require('readline');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Ścieżki
const rootDir = path.join(__dirname, '..');
const backendDir = path.join(rootDir, 'backend');
const frontendDir = path.join(rootDir, 'frontend');
const envPath = path.join(rootDir, '.env');

// Wczytaj zmienne z .env
dotenv.config({ path: envPath });

let backendProcess;

program
    .version('1.0.0')
    .command('start')
    .description('Uruchamia usługę przechowywania i akceptuje komendy')
    .action(() => {
        console.log('Uruchamianie usługi Storage System...');
        const port = process.env.VITE_API_PORT || 1000; // Domyślny port z .env
        backendProcess = startBackend(port);

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
                            backendProcess = startBackend(process.env.VITE_API_PORT || 1000);
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
                        updateEnvPort(newPort, () => {
                            console.log(`Zmieniono port na ${newPort}. Restartuję backend...`);
                            stopBackend(backendProcess, () => {
                                backendProcess = startBackend(newPort);
                            });
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

// Start backendu
function startBackend(port) {
    console.log('Uruchomiono backend na porcie', port);
    const backend = spawn('node', ['index.js', port], {
        cwd: backendDir,
        stdio: 'inherit',
        env: { ...process.env, VITE_API_PORT: port } // Przekazujemy port w env
    });

    backend.on('error', (err) => console.error(`Błąd backendu: ${err}`));
    backend.on('exit', (code) => {
        console.log('Zakończono backend z kodem', code);
    });

    return backend;
}

// Zatrzymanie backendu
function stopBackend(process, callback) {
    process.kill('SIGTERM');
    process.on('exit', (code) => {
        console.log('Backend zatrzymany z kodem', code);
        callback();
    });

    setTimeout(() => {
        if (!process.killed) {
            console.log('SIGTERM nie zadziałał, wymuszam zatrzymanie...');
            process.kill();
            callback();
        }
    }, 1000);
}

// Przebudowanie frontendu
function rebuildFrontend(callback) {
    const build = spawn('cmd.exe', ['/c', 'npm', 'run', 'build'], {
        cwd: frontendDir,
        stdio: 'inherit', // Zmiana z 'ignore' na 'inherit', żeby widzieć output
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

// Aktualizowanie pliku .env
function updateEnvPort(newPort, callback) {
    let envContent = '';

    try {
        envContent = fs.readFileSync(envPath, 'utf8');
    } catch (err) {
        // Jeśli .env nie istnieje, utworzymy nowy
        console.log('Tworzę nowy plik .env...');
    }

    const lines = envContent.split('\n');
    const portLineIndex = lines.findIndex(line => line.startsWith('VITE_API_PORT='));
    if (portLineIndex !== -1) {
        lines[portLineIndex] = `VITE_API_PORT=${newPort}`;
    } else {
        lines.push(`VITE_API_PORT=${newPort}`);
    }

    fs.writeFileSync(envPath, lines.join('\n').trim() + '\n', 'utf8');
    process.env.VITE_API_PORT = newPort; // Aktualizuj w pamięci
    callback();
}