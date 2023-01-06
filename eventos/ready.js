module.exports = {
    name: "ready",
    once: true,

    async events(Bot) {

        const comandos = await Bot.comandos.map(x => x)
        Bot.application.commands.set(comandos)

        console.log(`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓

    Nombre: [ ${Bot.user.username} ] 
    ID: [ ${Bot.user.id} ]

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        `)
        Bot.user.setPresence({
            status: "dnd",
            activities: [{ name: `Server: ${Bot.guilds.cache.size} ` }],
        })
    }
};