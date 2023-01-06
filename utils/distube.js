const { DisTube } = require('distube');
const { SoundCloudPlugin } = require('@distube/soundcloud');

module.exports = (Bot, EmbedBuilder) => {

    Bot.distube = new DisTube(Bot, {
        emitNewSongOnly: false, leaveOnEmpty: true, leaveOnFinish: true, leaveOnStop: true, savePreviousSongs: true, emitAddSongWhenCreatingQueue: false,
        emitAddListWhenCreatingQueue: false, searchSongs: 0, nsfw: true, emptyCooldown: 25,
        ytdlOptions: { highWaterMark: 1024 * 1024 * 64, quality: "highestaudio", format: "audioonly", liveBuffer: 60000, dlChunkSize: 1024 * 1024 * 4, },
        plugins: [new SoundCloudPlugin()]
    });

    Bot.distube.on("playSong", (queue, song) => { queue.textChannel.send({
            embeds: [new EmbedBuilder().setTitle("🎶 Bot de Música 🎶").setDescription(`**Reproduciendo:** ${song.name} - \`${song.formattedDuration}\` `)
            .setTimestamp().setThumbnail(song.thumbnail).setColor("Green")]})
    });

    Bot.distube.on("addSong", (queue, song) => { queue.textChannel.send({
            embeds: [new EmbedBuilder().setTitle("🎶 Bot de Música 🎶").setDescription(`**${song.name}** - \`${song.formattedDuration}\` se ha añadido a la cola`)
                .setTimestamp().setThumbnail(song.thumbnail).setColor("Green")]})
    });

    Bot.distube.on("addList", (queue, song) => { queue.textChannel.send({
            embeds: [new EmbedBuilder().setTitle("🎶 Bot de Música 🎶").setDescription(`**${song.name}** se ha añadido a la cola\n**Playlist:** ${playlist.song.length}`)
            .setTimestamp().setThumbnail(song.thumbnail).setColor("Green")]})
    });

    Bot.distube.on("empty", (queue) => { queue.textChannel.send({
            embeds: [new EmbedBuilder().setTitle("🎶 Bot de Música 🎶").setDescription(`¡El canal de voz está vacío! Dejando el canal...`).setTimestamp().setColor("Green")]})
    });

    Bot.distube.on("initQueue", (queue) => { queue.autoplay = true; queue.volume = 100 });

    Bot.distube.on("error", (e) => { console.log(e) });

};