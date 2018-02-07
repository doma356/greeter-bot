const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      var text = message.content;
      
    if (text === '!') {
      var text = '';
      var symbol = '';
      var msg = 'nani!?!?!?!?';
      
      message.reply(msg);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
