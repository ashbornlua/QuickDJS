const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const config = require('../../config/config.json');

module.exports = {
    name: 'invite',
    description: 'Get the bot\'s invite link.',
    category: 'Information',
    execute(message, args) {
        const inviteURL = config.inviteAuth;
        const inviteEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('🔗 Invite Me to Your Server!')
            .setDescription('Click the button below to invite me to your server. I’ll be happy to help!')
            .setThumbnail(config.imageLink)
            .addFields(
                {
                    name: '🌟 Why Invite Me?',
                    value: 'I can help manage your server, moderate chats, provide utility commands, and more!',
                    inline: false,
                },
                {
                    name: '📚 Permissions Required',
                    value: 'The invite link requests administrator permissions by default. You can adjust them as needed.',
                    inline: false,
                }
            )
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.displayAvatarURL(),
            })
            .setTimestamp();
        const inviteButton = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('Invite Me Now')
                .setURL(inviteURL)
                .setStyle(ButtonStyle.Link)
        );
        message.reply({ embeds: [inviteEmbed], components: [inviteButton] });
    },
};