const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      var text = message.content;
      symbol = text[0];
      var msg = 'nani!?!?!';

      switch(symbol){
        case '!':
          //text = message.content.substring(1)
          msg = 'gugugug';
        break;
      }

      message.reply(msg);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
