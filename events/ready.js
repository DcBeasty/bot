module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.tag}, kullanıma hazır.`);
    client.user.setPresence({
      activities: [{ name: `mp3 dönüştürücü`, type: `WATCHING` }],
      status: `offline`,
    });
  },
};
