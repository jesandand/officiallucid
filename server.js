const Discord = require("discord.js");
const tutorialBot = require("./handler/Client.js"); // We're gonna create this soon.
const client = new tutorialBot();

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

client.snipes = new Map()
client.on('messageDelete', function (message, channel) {
    if (message.author.bot) return;
    if (!message.guild) return;
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        profilepp: message.author.displayAvatarURL(),
        image: message.attachments.first() ? message.attachments.first().proxyURL : null,
        date: message.createdTimestamp
    })
})

client.on('message', async (message) => {
  if(message.content.includes(client.user.id)) {
    let { prefix } = require('./config.json')
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Hallo **${message.author.tag}** bot **${client.user.username}** meggunakan prefix **${prefix}**`)
    .setTimestamp()
    message.channel.send(embed)
  }
});


require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
require('dotenv').config();
client.on("warn", console.warn)
client.on("error", console.error);
client.login(process.env.SECRET).catch(console.error);
