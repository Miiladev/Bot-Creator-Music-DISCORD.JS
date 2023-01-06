const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    once: true,

    async events(Bot, interaction) {

        if (!interaction.isChatInputCommand()) return;
        const comandos = Bot.comandos.get(interaction.commandName)

        if (!comandos) return;
        comandos.Comandos(Bot, interaction, EmbedBuilder);

    }
}
