const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!pam') {
    //  var text = message.content;
      message.reply("ka tu nori!?");
      client.sendMessage({
        to: channelID,
        message: "pyst"
      })
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
