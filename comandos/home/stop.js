const lenguaje = require(`${process.cwd()}/utils/lenguaje`);

module.exports = {
    name: "stop",
    description: "Pone fin a la música",

    async Comandos(Bot, interaction, EmbedBuilder) {

        if (!interaction.member.voice.channel) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice).setTimestamp()], ephemeral: true
        });
        if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice_compart).setTimestamp()], ephemeral: true
        });

        const queue = await Bot.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.stop.queue).setColor("Green")] })

        Bot.distube.stop(interaction);
        interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.stop.descrip).setColor("Green")] })

    }
}