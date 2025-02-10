function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
}

async function logWithChalk() {
    const chalk = (await import('chalk')).default;
    function infoLogs(message) {
        const currentTime = getFormattedTime();
        console.log(`${currentTime} ${chalk.white('[') + chalk.blue('INFO') + chalk.white(']')} | ${message}`);
    }
    function errorLogs(message) {
        const currentTime = getFormattedTime();
        console.log(`${currentTime} ${chalk.white('[') + chalk.red('ERROR') + chalk.white(']')} | ${message}`);
    }
    function successLogs(message) {
        const currentTime = getFormattedTime();
        console.log(`${currentTime} ${chalk.white('[') + chalk.green('SUCCESS') + chalk.white(']')} | ${message}`);
    }
    return { infoLogs, errorLogs, successLogs };
}

module.exports = logWithChalk();