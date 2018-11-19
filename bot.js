const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'spaces') {
    	message.channel.sendMessage('l i k e t h i s ?');
  	}
});

client.on('message', message => {
    if (message.content === 'yeet') {
    	message.channel.sendMessage('Yeet yeet potato skeet');
  	}
});

client.on('message', message => {
    if (message.content === 'Yeet') {
    	message.channel.sendMessage('Yeet yeet potato skeet');
  	}
});

client.on('message', message => {
    if (message.content === 'The Creation') {
    	message.channel.sendMessage('You talking about me?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
