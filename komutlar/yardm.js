const { Client, CommandInteraction } = require("discord.js");

module.exports = {

  name: "yardım",
  description: 'Botun Yardım Menüsü',
  type: 1,
  options: [],
  /**
  * @param {Client} client
  * @param {CommandInteraction} interaction
  */
  run: async (client, interaction) => {
    interaction.reply({
      embeds: [
        {
          title: `${client.user.username} Yardım Menüsü`,
          color:"GOLD",
          fields: [
              { name: "/banner", value: "Sade Bir Banner Yapar", inline: true },
            { name: "/alevli", value: "Alevli Bir Logo Yaparsınız", inline: true },
            { name: "/altın", value: "Altinlı Bir Logo Yaparsınız", inline: true },
            { name: "/anime", value: "Animeli Bir Logo Yaparsınız", inline: true },
            { name: "/cool", value: "Güzel Gibi Gözülen Bir Logo Yaparsınız", inline: true },
            { name: "/gold", value: "Gold Bir Logo Yaparsınız", inline: true },
            { name: "/google", value: "Google Yazı Tipi Şeklinde Bir Logo Yaparsınız", inline: true },
            { name: "/gökkuşağı", value: "Gökkuşağ Şeklinde Bir Logo Yaparsınız", inline: true },
            { name: "/küçük-yazı", value: "Küçük Yazı Tipinde Bir Logo Yaparsınız", inline: true },
            { name: "/neon", value: "Neon Bir Logo Yaprsınız", inline: true },
            { name: "/odun", value: "Odun Yazı Tipinde Bir Logo Yaparsınız", inline: true },
          ]
        }
      ]
    })
  }
};