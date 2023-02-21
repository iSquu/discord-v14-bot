const {Client} = require('discord.js');
const config = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`${client.user.username} is now online in ${client.guilds.cache.size} servers!`);
    },
};