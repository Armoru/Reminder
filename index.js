const Discord = require('discord.js');
const bot = new Discord.Client();

console.log("hello weld");
process.env.TZ = 'Asia/Jakarta';
let date = new Date();
let hr = date.getHours();
let day= date.getDay();

bot.on('message',(message)=>{
    if(message.content=='!check'){
        message.reply("I'ts"+ hr + " "+day);
    }else if(message.content=='!start'){
        var schedule = require('node-schedule');

        var j = schedule.scheduleJob('10 * * * * *', function(){
            console.log("@everyone Time to hit the #Gym");
            message.channel.send("@everyone Time to hit the #Gym");
        });
    }
});

/*bot.on('ready',()=>{
    
        
        //how fix this wtf//var channel = Guild.Client .get("name", "The Castle").defaultChannel;
        //bot.sendMessage(channel, "@everyone Time to hit the #Gym");
        //432870102178988032
    });
});*/

    


/*var j = schedule.scheduleJob('00 00 20 * * *', function(){
    message.channel.send('@everyone Time to hit the #Gym');
});*/

bot.login(process.env.BOT_TOKEN);