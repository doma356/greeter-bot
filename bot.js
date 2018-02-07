const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      var text = message.content;
      var msg = '';

      switch(text[0]){
        case '!':
          //text = message.content.substring(1)
          message.reply('aaaaasd');
        break;
      }

      message.reply(msg);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
