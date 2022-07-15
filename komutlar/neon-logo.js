const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {

  name: "neon",
    description: 'Neon Bir Logo Yaparsınız',
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
	.setImage('https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=neon-logo&text='+ interaction.options.getString("yazı"))

interaction.reply({ embeds: [logo] });
                                              }
                                            };  
