const lenguaje = require(`${process.cwd()}/utils/lenguaje`);


module.exports = {
    name: "volumen",
    description: "Controla el volumen de la música",
    options: [
        {
            name: "valor",
            description: "Valor del volumen",
            type: 3,
            required: true
        }
    ],

    async Comandos(Bot, interaction, EmbedBuilder) {

        if (!interaction.member.voice.channel) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice).setTimestamp()], ephemeral: true
        });
        if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return interaction.reply({
            embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.voice_compart).setTimestamp()], ephemeral: true
        });

        const queue = await Bot.distube.getQueue(interaction)
        if (!queue) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.volumen.queue).setColor("Green")] })

        let valor = await interaction.options.getString("valor");
        const volume = parseInt(valor);
        if (isNaN(volume) || volume <= 0 || volume % 1 != 0) return interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(lenguaje.volumen.valor).setColor("Red")] })

        queue.setVolume(volume)
        interaction.reply({ embeds: [new EmbedBuilder().setTitle(interaction.guild.name).setDescription(eval(lenguaje.volumen.descrip)).setColor("Green")] })

    }
}