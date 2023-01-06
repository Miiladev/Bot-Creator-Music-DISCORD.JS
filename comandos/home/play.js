const lenguaje = require(`${process.cwd()}/utils/lenguaje`);

module.exports = {
    name: "play",
    description: "Reproducir música",
    options: [
        {
            name: "música",
            description: "Titulo de la música",
            type: 3,
            required: true
        }
    ],
    async Comandos(Bot, interaction, EmbedBuilder) {
        const music = await interaction.options.getString("música");

        if (!interaction.member.voice.channel) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice).setTimestamp()], ephemeral: true
        });
        if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice_compart).setTimestamp()], ephemeral: true
        });

        Bot.distube.play(interaction.member.voice?.channel, music, { member: interaction.member, textChannel: interaction.channel, interaction });

        interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(eval(lenguaje.play)).setTimestamp()], ephemeral: true });
    }
};