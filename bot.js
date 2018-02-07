const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!pam doma') {
    	message.reply('http://ziezmariai.lm.lt/~detach/v2/images/file/UGDYMAS/tvarkarasciai/2018/x30014ga_add.htm');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
