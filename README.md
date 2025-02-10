# 🚀 QuickDJS - A Quick Discord.js Bot Template

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green) ![Discord.js](https://img.shields.io/badge/Discord.js-v14-blueviolet)

**QuickDJS** is an open-source, lightweight, and modular template for creating Discord bots using the [Discord.js](https://discord.js.org/) library. Whether you're a beginner or an experienced developer, this template provides a clean and organized structure to kickstart your bot development journey.

---

## 🌟 Features

- **Modular Command Structure**: Organize commands into categories (e.g., `info`, `moderation`, `utility`) for better maintainability.
- **Dynamic Command Loading**: Automatically loads commands from the `commands` folder, making it easy to add or remove functionality.
- **Customizable Configuration**: Manage settings like the bot token, prefix, and playing message via `config.json`.
- **Stylish Logging**: Beautifully formatted logs with colors (`chalk`) for better debugging and monitoring.
- **Modern Practices**: Built with the latest version of Node.js and Discord.js, ensuring compatibility and performance.
- **Open Source**: Fully customizable and free to use under the MIT License.

---

## 📦 Installation

### Prerequisites

- **Node.js v16+**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Discord Bot Token**: Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications) and grab your token.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ashbornlua/QuickDJS.git
   cd QuickDJS
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Bot**:
   - Open `config/config.json` and replace the placeholder values with your bot's token, prefix, and other settings:
     ```json
     {
         "token": "YOUR_BOT_TOKEN_HERE",
         "prefix": "!",
         "playingMessage": "Type !help for assistance"
     }
     ```

4. **Run the Bot**:
   ```bash
   node index.js
   ```

5. **Invite the Bot**:
   Use the OAuth2 URL from the Discord Developer Portal to invite your bot to your server.

---

## 🛠️ Usage

### Commands

QuickDJS comes with a set of pre-built commands to get you started:

| Command       | Category      | Description                          |
|---------------|---------------|--------------------------------------|
| `!ping`       | Utility       | Check the bot's latency.             |
| `!help`       | Information   | Displays a list of available commands. |
| `!info`       | Information   | Shows detailed information about the bot. |
| `!invite`     | Information   | Get the bot's invite link.           |
| `!ban`        | Moderation    | Ban a user from the server.          |

### Adding Custom Commands

To add a new command:
1. Create a new `.js` file in the appropriate category folder under `commands/` (e.g., `commands/utility/mycommand.js`).
2. Follow the structure below:

```js
module.exports = {
    name: 'mycommand',
    description: 'This is my custom command.',
    category: 'Utility',
    execute(message, args) {
        message.channel.send('Hello from my custom command!');
    },
};
```

3. Restart the bot, and your command will be automatically loaded.

---

## 🎨 Stylish Logging

QuickDJS uses the `chalk` library to style logs in the terminal. Logs are categorized and color-coded for better readability:

- **Info Logs**: `[INFO]` in green.
- **Success Logs**: `[SUCCESS]` in blue.
- **Error Logs**: `[ERROR]` in red.

Example:
```
[12:34:56] [INFO] | Welcome to QuickDJS
[12:34:57] [SUCCESS] | Bot is online and ready!
```

---

## 🤝 Contributing

We welcome contributions from the community! Here’s how you can help:

1. **Fork the Repository**: Click the "Fork" button on GitHub.
2. **Create a Branch**: Make your changes in a new branch.
3. **Submit a Pull Request**: Describe your changes and submit a PR.

Please follow these guidelines:
- Write clean, readable code.
- Test your changes thoroughly.
- Update the documentation if necessary.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as you see fit.

---

## 🙏 Acknowledgments

- **Discord.js Team**: For creating the amazing [Discord.js](https://discord.js.org/) library.
- **Contributors**: Special thanks to everyone who contributes to this project.

---

## 🌐 Links

- **GitHub Repository**: [QuickDJS](https://github.com/ashbornlua/QuickDJS)
- **Discord.js Documentation**: [discord.js.org](https://discord.js.org/)
- **Node.js Documentation**: [nodejs.org](https://nodejs.org/)

---

## 📢 Support

If you encounter any issues or have suggestions, feel free to open an issue on GitHub or reach out to me:

- **GitHub**: [@ashbornlua](https://github.com/ashbornlua)
- **Discord**: Join our support server (link coming soon!)

---

Made with ❤️ by [@ashbornlua](https://github.com/ashbornlua)

---
