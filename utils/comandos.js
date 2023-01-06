const fs = require("fs");

module.exports = (Bot) => {

    fs.readdirSync(`${process.cwd()}/comandos`).forEach(carpeta => {
        const comandos = fs.readdirSync(`${process.cwd()}/comandos/${carpeta}`).filter(archivo => archivo.endsWith(".js"));

        for (const archivo of comandos) {
            const Comandos = require(`${process.cwd()}/comandos/${carpeta}/${archivo}`);

            Bot.comandos.set(Comandos.name.toLowerCase(), Comandos); console.log(`Cargando [ ${carpeta} ] - ${archivo} Comando`);
        }
    });
};