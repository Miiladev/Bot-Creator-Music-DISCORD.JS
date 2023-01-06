const lenguaje = require(`${process.cwd()}/utils/lenguaje`);

module.exports = {
    name: "resume",
    description: "Reanuda la música",

    async Comandos(Bot, interaction, EmbedBuilder) {

        if (!interaction.member.voice.channel) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice).setTimestamp()], ephemeral: true
        });
        if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice_compart).setTimestamp()], ephemeral: true
        });

        const queue = await Bot.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.resume.queue).setColor("Green")] })

        if (!Bot.distube.getQueue(interaction).paused) return interaction.reply(lenguaje.resume.paused)

        const music = await Bot.distube.getQueue(interaction)

        if (!music) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.resume.music).setColor("Red")] })

        music.resume()
        interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(eval(lenguaje.resume.resume)).setColor("Green")] })

    }
}
