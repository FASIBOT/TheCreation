const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'spaces') {
    	message.reply('l i k e t h i s ?');
  	}
});

client.on('message', message => {
    if (message.content === 'yeet') {
    	message.reply('yeet yeet potato skeet');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
