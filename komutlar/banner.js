const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {

  name: "banner",
    description: 'Sade Bir Banner Yaparsınız',
      type: 1,
        options: [
            {

            name: "yazı",
            description: "Banner İçin Yazı",
            type: 3,
            required: true,
                                  }
                                ],
                                    /**
                                      * @param {Client} client
                                        * @param {CommandInteraction} interaction
                                          */
                                            run: async (client, interaction) => {
                                           const banner = new MessageEmbed()
	.setTitle("Banneriniz Hazır!")
	.setColor('GOLD')
	.setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+interaction.options.getString("yazı"))

interaction.reply({ embeds: [banner] });
                                              }
                                            };  
