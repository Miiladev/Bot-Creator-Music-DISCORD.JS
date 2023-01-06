const { Client, Collection, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const Bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

Bot.comandos = new Collection();

require("./requiere")(Bot);

//El bot necesita de un archivo .env que contenga DISCORD_TOKEN="AQUI PONDRIAS TU TOKEN DEL BOT".

//El archivo .env debe ir en la misma posición del index.js

//Por que no hay ese archivo en github?
//Por que github no se puede utilizar un nombre que comience por un punto “.” porque este tipo de nombres están reservados para el sistema.

Bot.login(process.env.DISCORD_TOKEN).catch(() => console.log("Token invalido"));
