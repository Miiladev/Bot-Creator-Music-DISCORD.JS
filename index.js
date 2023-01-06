const { Client, Collection, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const Bot = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

Bot.comandos = new Collection();

require("./requiere")(Bot);

Bot.login(process.env.DISCORD_TOKEN).catch(() => console.log("Token invalido"));