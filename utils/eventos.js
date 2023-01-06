const fs = require("fs");

module.exports = (Bot) => {

    const events = fs.readdirSync("./eventos").filter(file => file.endsWith(".js"))

    for (file of events) {
        const event = require(`../eventos/${file}`)
        if (event.once) {
            Bot.on(event.name, (...args) => event.events(Bot, ...args))
        } else {
            Bot.on(event.name, (...args) => event.events(Bot, ...args))

        }

        console.log(`Evento Cargado: ${file}`)
    }

};