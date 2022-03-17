// npm install discord.js ditenv

const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
    // Check to make sure bot is online
    console.log("Your bot is online.")
})

client.on("guildMemberAdd", (member) => {
    // Gets the users guild and system announcement channel or general if one is not defined
    guild = member.guild
    if (guild.systemChannel) { 
        channel = guild.systemChannel
    } else {
        channel = guild.channels.cache.find(channel => channel.name === "general")
    }

    const message = `Hey <@${member.id}>, welcome to **${guild.name}** :heart_eyes::smiley:`
    channel.send(message)
})

client.login(process.env.TOKEN)