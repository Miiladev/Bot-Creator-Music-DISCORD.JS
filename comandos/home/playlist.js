const lenguaje = require(`${process.cwd()}/utils/lenguaje`);

module.exports = {
    name: "playlist",
    description: "Muestra la playlist",

    async Comandos(Bot, interaction, EmbedBuilder) {

        if (!interaction.member.voice.channel) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice).setTimestamp()], ephemeral: true
        });
        if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice_compart).setTimestamp()], ephemeral: true
        });

        const queue = await Bot.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.playlist.queue).setColor("Green")] })

        let texto = queue.songs.map((song, id) => `**\`${id + 1}\`** - \`${song.name}\` | \`${song.formattedDuration}\``).join(`\n `)

        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle(eval(lenguaje.playlist.titulo))
                .setDescription(eval(lenguaje.playlist.descrip) + texto)
                .setColor("Random")
            ]
        })

    }
}

