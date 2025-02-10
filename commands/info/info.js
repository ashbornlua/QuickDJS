const { EmbedBuilder } = require('discord.js');

const config = require('../../config/config.json');

module.exports = {
    name: 'info',
    description: 'Displays bot information.',
    category: 'Information',
    execute(message, args) {
        const infoEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('ℹ️ Bot Information')
            .setDescription('Here is some detailed information about this bot.')
            .addFields(
                {
                    name: '🌟 Creator',
                    value: '[@ashbornlua](https://github.com/ashbornlua)',
                    inline: true,
                },
                {
                    name: '📚 Language',
                    value: 'Node.js',
                    inline: true,
                },
                {
                    name: '🛠️ Library',
                    value: 'Discord.js',
                    inline: true,
                },
                {
                    name: '⏰ Runtime',
                    value: '24/7',
                    inline: true,
                },
                {
                    name: '🌐 Repository',
                    value: '[GitHub Repository](https://github.com/ashbornlua)',
                    inline: false,
                }
            )
            .setThumbnail(config.imageLink)
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.displayAvatarURL(),
            })
            .setTimestamp();
        message.reply({ embeds: [infoEmbed] });
    },
};