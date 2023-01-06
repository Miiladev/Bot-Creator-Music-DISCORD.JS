const { EmbedBuilder } = require("discord.js");

module.exports = (Bot) => {

    ["distube", "eventos", "comandos"].forEach(Files => { require(`${process.cwd()}/utils/${Files}`)(Bot, EmbedBuilder); console.log("Utils - [ " + Files + " ]") })

};