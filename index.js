const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: 851 });
const fs = require("fs");
const ayarlar = require("./ayarlar.json");

global.client = client;
client.commands = (global.commands = []);
fs.readdir("./komutlar/", (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./komutlar/${file}`);
    client.commands.push({
      name: props.name.toLowerCase(),
      description: props.description,
      options: props.options,
      type: 1
    })
    console.log(`Komut Yüklendi: ${props.name}`);
  });
});
fs.readdir("./events/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Event yüklendi: ${eventName}`);
    client.on(eventName, (...args) => {
      event(client, ...args);
    });
  });
});

client.on("ready", async () => {
  console.log("Bot Aktif! | Covid-19 Code İyİ Kullanımlar Diler...");
  client.user.setActivity("Covid-19 #Code Logo Bot | /yardım", { type: "WATCHING" });
  const rest = new REST({ version: "10" }).setToken(ayarlar.token);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: commands,
    })
  } catch (error) {
    console.error(error);
  }
});

client.login(ayarlar.token);
