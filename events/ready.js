module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

    let statuses = [
        `v.help | Vania Gemash ©`,
        `v.help | Stay In ${client.guilds.cache.size} Server`,
        `v.help | Development By Jesand#1987`,
        `v.help | #MarhabanYaRamadhan`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status, type: "STREAMING"}, status: 'online'});
    }, 2000);
};
