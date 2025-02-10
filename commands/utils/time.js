const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'time',
    description: 'Displays the current time.',
    category: 'Utility',
    execute(message, args) {
        const currentTime = getFormattedTime();
        const timeEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('⏰ Current Time')
            .setDescription(`The current time is: \`${currentTime}\``)
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.displayAvatarURL(),
            })
            .setTimestamp();
        message.reply({ embeds: [timeEmbed] });
    },
};

function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
}