const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!pam') {
      message.reply("ka tu nori!?");
    	message.reply(message.content[0]);
      message.reply(message.substring(0, 1));
      message.reply(message.substring(0, 2));
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
