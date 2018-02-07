const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      var text = message.content;
      var symbol = text[0];
      msg = 'nani!?!?';

      if(symbol == '!'){
        var dalys = message.substring(1).split(' ');
        var veiksmas = dalys[0];

        if(veiksmas == 'pam'){
          var vardas = dalys[1];

          if(vardas == 'doma'){
            msg = 'domos tvarkarastis';
          }
        }
      }

      message.reply(msg);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
