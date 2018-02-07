var Discord = require('discord.io');
var auth = require('./auth.json');
var receiver = '356863716257431584';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {

});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var vardas = args[1];

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
     
     // Zinute, kuria issiuncia kai paraso kas nors, bet ne botas, (korea/Korea)
     if(user != "greeter-bot" && channelID == '217353444875436032'){
       for(var i = 0; i < message.length - 4; i++){
         if(message.substring(i, i + 5) == 'korea' || message.substring(i, i + 5) == 'Korea'){
           bot.sendMessage({
             to: channelID,
             message: 'Vytenis loves Korea!'
           });
           break;
         }
       }
     }
     // TEST
     if(user != "greeter-bot" && channelID == '217353444875436032'){
       bot.sendMessage({
         to: receiver,
         message:  user + ': ' + message
       });
     }
//===================================RANDOM=================RANDOM===================================
     if(user != "greeter-bot" && channelID == '217353444875436032'){
       for(var i = 0; i < message.length; i++){
         if(message.substring(i, i + 8) == 'Knuckles' || message.substring(i, i + 8) == 'knuckles' ||
            message.substring(i, i + 16) == 'Ugandan knuckles' || message.substring(i, i + 16) == 'Ugandan Knuckles' ||
            message.substring(i, i + 16) == 'ugandan knuckles' || message.substring(i, i + 16) == 'greeter-bot#8312'){
           //--------------------------
           var queen = false;
           var msg = 'Nani!?';
           var sk = Math.random();
           //--------------------------
           if(sk >= 0.8 && sk <= 1){
             msg = 'Do you know da wae brother?'
           }
           else if(sk >= 0.7 && sk <= 0.8){
             msg = 'Show me dae wae'
           }
           else if(sk >= 0.4 && sk <= 0.59){
             msg = 'Mantai tu esi rasistas'
           }
           else if(sk >= 0.1 && sk <= 0.2){
             msg = '@' + user + " " + 'You are not my Queen, i spit on you!'
             queen = true;
           }

           bot.sendMessage({
             to: channelID,
             message: msg
           });
           if(queen == true){
             bot.sendMessage({
               to: channelID,
               message: 'Pthu!'
             });
             queen = false;
           }
           break;
         }
       }
     }
//================================================================================================

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
