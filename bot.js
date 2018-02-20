const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk5MjYzMjU2NjY2OTYzOTc5.DWz0fQ.GI8gnqfKhhHd9OGdmpPKiCJXjg8
);
