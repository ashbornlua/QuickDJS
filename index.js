// QuickDJS - Quick Discord.JS Template
// Github: @ashbornlua
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');
const config = require('./config/config.json');

let infoLogs, errorLogs, successLogs;

(async () => {
    const logger = await require('./logs/logger');
    ({ infoLogs, errorLogs, successLogs } = logger);

    main();
})();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildPresences,
    ],
});

client.config = config;
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);
for (const folder of commandFolders) {
    const commandsFolderPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandsFolderPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsFolderPath, file);
        const command = require(filePath);
        client.commands.set(command.name, command);
    }
}

client.once('ready', () => {
    successLogs('QuickDJS Initialized!');
    infoLogs(`Client running as ${client.user.tag}`);
    client.user.setActivity(client.config.playingMessage, { type: 'PLAYING' });
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;
    try {
        command.execute(message, args);
    } catch (error) {
        errorLogs(error);
        message.reply('There was an error executing that command.');
    }
});

function clearTerminal() {
    if (process.platform === 'win32') {
        exec('cls', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error clearing terminal: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    } else {
        exec('clear', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error clearing terminal: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    }
}

async function main() {
    console.clear();
    infoLogs('Welcome to QuickDJS');
    infoLogs('Github: @ashbornlua');
    if (config.token != null) {
        successLogs('Client token found, running client...');
        client.login(config.token).catch(err => {
            errorLogs('Failed to log in to Discord');
            console.error(err);
        });
    } else {
        errorLogs('TOKEN not found, client can\'t run.');
    }
}