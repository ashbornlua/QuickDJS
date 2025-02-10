const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays help information.',
    category: 'Information',
    execute(message, args) {
        const categories = {};
        message.client.commands.forEach(command => {
            const category = command.category || 'Uncategorized';
            if (!categories[category]) categories[category] = [];
            categories[category].push(`\`${command.name}\``);
        });
        const helpEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('👋 Help | Commands List')
            .setDescription('Here\'s the list of commands this bot has.');
        for (const [category, commands] of Object.entries(categories)) {
            helpEmbed.addFields({
                name: `🔹 ${category}`,
                value: commands.join(', ') || 'No commands in this category.',
                inline: false,
            });
        }
        helpEmbed
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.displayAvatarURL(),
            })
            .setTimestamp();
        message.reply({ embeds: [helpEmbed] });
    },
};