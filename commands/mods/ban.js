module.exports = {
    name: 'ban',
    description: 'Bans a user from the server.',
    category: 'Moderation',
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply("You don't have permission to ban members!");
        }
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.members.resolve(user);
            if (member) {
                member.ban().then(() => {
                    message.channel.send(`${user.tag} has been banned.`);
                }).catch(err => {
                    message.channel.send("I couldn't ban that user.");
                    console.error(err);
                });
            } else {
                message.channel.send("That user isn't in this server.");
            }
        } else {
            message.channel.send("You need to mention a user to ban.");
        }
    },
};