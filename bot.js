const Discord = require('discord.js');
const bot = new Discord.Client();

const request = require('request');

const PREFIX = '*';

bot.on('ready', () =>{
    console.log('Bot currently online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!')
        break;
        case 'author':
            message.channel.send('oNestle#0001 created me.')
        break;
        case 'status':
            message.channel.send('Online, duh. If I was offline, you wouldn\'t get this message lmao')
        break;
        case 'nsfw':
            message.channel.send('Lmao im not Dank Memer or anything. No NSFW here! :D')
        break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Mumbler Version: 1\.0\.0')
            }else{
                message.channel.send('Idk what that command is supposed to do. Did you make a typo?')
            }
        break;
        case '':
            if(args[1] === ''){
                message.channel.send('Yup, thats my prefix. Now please actually type a command lmao')
            }else{
                message.channel.send('')
            }
        break;
        case 'time':
            message.channel.send('lmao you lazy bum. Get off the couch/chair and actually take a look at an actual clock xD')
        break;
        case 'math':
            message.channel.send('I will answer math problems if you type the command *domath dummy.')
        break;
        case 'domath':
            message.channel.send('Dummy. Did you actually think I would do that? LOL! Stop cheating on homework and actually use your brain')
        break;
        case 'help':
            message.channel.send('Commands: math, time, info version, nsfw, status, author, ping. Discord: https://discord.gg/TZJhsRn')
        break;
        case 'laugh':
            message.react('😆')
        break;
        case 'sad':
            message.react('😩')
        break;
        case 'hi':
            message.channel.send("hi")
        break;
        case 'discord':
            message.channel.send('**Join the Support Discord:** https://discord.gg/TZJhsRn')
        break;
        case 'swear':
            message.channel.send('You are a b||artc||h and an a||b||sh||op||e')
        break;


    }
            
});

client.login(process.env.BOT_TOKEN);
