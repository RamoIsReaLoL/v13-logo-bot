const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {

  name: "anime",
    description: 'Animeli Bir Logo Yaparsınız',
      type: 1,
        options: [
            {

            name: "yazı",
            description: "Logo İçin Yazı",
            type: 3,
            required: true,
                                  }
                                ],
                                    /**
                                      * @param {Client} client
                                        * @param {CommandInteraction} interaction
                                          */
                                            run: async (client, interaction) => {
                                           const logo = new MessageEmbed()
	.setTitle("Logon Hazır!")
	.setColor('GOLD')
	.setImage('https://habbofont.net/font/battlebanzai/'+ interaction.options.getString("yazı")+'.gif')

interaction.reply({ embeds: [logo] });
                                              }
                                            };  
