const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.substring(0, 1) == '!') {
  var args = message.substring(1).split(' ');
  var cmd = args[0];
  var vardas = args[1];

//  logger.info(vardas);

  args = args.splice(1);
  switch(cmd) {
      // !ping
      case 'pam':
          var msg;
          if(vardas == "doma"){
            msg = 'http://ziezmariai.lm.lt/~detach/v2/images/file/UGDYMAS/tvarkarasciai/2018/x30014ga_add.htm';
          }
          else if(vardas == "gytis"){
            msg = 'http://ziezmariai.lm.lt/~detach/v2/images/file/UGDYMAS/tvarkarasciai/2018/II/x30014ga_neg.htm';
          }
          else{
            msg = 'nani!?';
          }
          bot.sendMessage({
              to: channelID,
              message: msg
          });
      break;
      // Just add any case commands if you want to..
   }
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
