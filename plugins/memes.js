/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Coded by @KursadHD
*/

const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC}, (async (message, match) => {   

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
 

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, {filename: 'asena-meme.png', mimetype: Mimetype.png, caption: 'Made by 𝓙𝓮𝓼𝓼𝓲𝓮 🔥'});
            await info.delete();    
        });
    }));

    Asena.addCommand({pattern: 'jcmd', fromMe: true, deleteCommand: false, desc: Lang.JCMD_DESC}, (async (message, match) => {


        await message.sendMessage('●▬▬▬ *𝓙𝓮𝓼𝓼𝓲𝓮 𝙲𝚘𝚖𝚖𝚊𝚗𝚍-𝙻𝚒𝚜𝚝* ☯ ▬▬▬●\n\n🎯 Command: *.yt*\n📝 Description:```It searches on YouTube.```\n\n🎯 Command: *.song Enter_Your_Song_Name*\n📝 Description:```Uploads the song you wrote.```\n\n🎯 Command: *.song YoutubeVideo_Link*\n📝 Description:```Download Youtube  video to mp3.```\n\n🎯 Command: *.video YoutubeVideo_Link*\n📝 Description:```Downloads video from YouTube.\n⚠️( Please Less than 30 minutes in your youtube video)```\n\n🎯 Command: *.mp4audio*\n📝 Description:```It converts video to sound.```\n\n🎯 Command: *.tts*\n📝 Description:```It converts text to sound.```\n\n🎯 Command: *.sticker*\n📝 Description:```It converts your replied photo to a sticker. Put a sticker and mention sticker and type command.```\n\n🎯 Command: *.attp*\n📝 Description:```Adds rainbow effect to the text as a sticker.```\n\n🎯 Command: *.imagesticker*\n📝 Description:```Converts the sticker to a photo. Put a sticker and mention sticker and type command.```\n\n🎯 Command: *.ttp*\n📝 Description:```Converts text to plain painting.```\n\n🎯 Command: *.glowttp*\n📝 Description:```Converts text to neon painting.```\n\n🎯 Command: *.removebg*\n📝 Description:```Removes the background of the photos.```\n\n🎯 Command: *.meme*\n📝 Description:```Photo memes you replied to.```\n\n🎯 Command: *.wallpaper*\n📝 Description:```It sends high resolution random wallpapers.```\n\n🎯 Command: *.bwimage*\n📝 Description:```Applies a black and white effect to image```\n\n🎯 Command: *.tagadmin*\n📝 Description:```Tag all admins in the group and message them.```\n\n🎯 Command: *.weather*\n📝 Description:```This shows the weather in your City.```*⌨️ Example:*.weather Colombo\n\n🎯 Command: *.ocr*\n📝 Description:```Reads the text on the photo you have replied to. It works English Languages Photo. Not Support Sinhala.```\n\n🎯 Command: *.calc*\n📝 Description:```Performs simple math operations.```\n\n🎯 Command: *.trt*\n📝 Description:```It translates with Google Translate. You must reply to any message.```\n*⌨️ Example:*.trt en si (From English to Sinhala)\n\n🎯 Command: *.ss*\n📝 Description:```Takes a screenshot from the page in the given link.```\n\n⭕ ```Can Use Only English Characters...!```\n\n⚠️ Warning!\n *Please, Do not Access to Use Private Use this bot* ❌\n*Using the bot out of purpose will explicitly ban you.*\n\n*𝓙𝓮𝓼𝓼𝓲𝓮 Bot Owner* - 𝚃𝚑𝚊𝚛𝚒𝚗𝚍𝚞 𝙳𝚑𝚊𝚗𝚞𝚜𝚑𝚔𝚊\n𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝓂𝑒 - wa.me/+94769183064');

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, {filename: 'asena-meme.png', mimetype: Mimetype.png, caption: 'Made by 𝓙𝓮𝓼𝓼𝓲𝓮 🔥'});
            await info.delete();    
        });
    }));

    Asena.addCommand({pattern: 'jcmd', fromMe: true, deleteCommand: false, desc: Lang.JCMD_DESC}, (async (message, match) => {


        await message.sendMessage('●▬▬▬ *𝓙𝓮𝓼𝓼𝓲𝓮 𝙲𝚘𝚖𝚖𝚊𝚗𝚍-𝙻𝚒𝚜𝚝* ☯ ▬▬▬●\n\n🎯 Command: *.yt*\n📝 Description:```It searches on YouTube.```\n\n🎯 Command: *.song Enter_Your_Song_Name*\n📝 Description:```Uploads the song you wrote.```\n\n🎯 Command: *.song YoutubeVideo_Link*\n📝 Description:```Download Youtube  video to mp3.```\n\n🎯 Command: *.video YoutubeVideo_Link*\n📝 Description:```Downloads video from YouTube.\n⚠️( Please Less than 30 minutes in your youtube video)```\n\n🎯 Command: *.mp4audio*\n📝 Description:```It converts video to sound.```\n\n🎯 Command: *.tts*\n📝 Description:```It converts text to sound.```\n\n🎯 Command: *.sticker*\n📝 Description:```It converts your replied photo to a sticker. Put a sticker and mention sticker and type command.```\n\n🎯 Command: *.attp*\n📝 Description:```Adds rainbow effect to the text as a sticker.```\n\n🎯 Command: *.imagesticker*\n📝 Description:```Converts the sticker to a photo. Put a sticker and mention sticker and type command.```\n\n🎯 Command: *.ttp*\n📝 Description:```Converts text to plain painting.```\n\n🎯 Command: *.glowttp*\n📝 Description:```Converts text to neon painting.```\n\n🎯 Command: *.removebg*\n📝 Description:```Removes the background of the photos.```\n\n🎯 Command: *.meme*\n📝 Description:```Photo memes you replied to.```\n\n🎯 Command: *.wallpaper*\n📝 Description:```It sends high resolution random wallpapers.```\n\n🎯 Command: *.bwimage*\n📝 Description:```Applies a black and white effect to image```\n\n🎯 Command: *.tagadmin*\n📝 Description:```Tag all admins in the group and message them.```\n\n🎯 Command: *.weather*\n📝 Description:```This shows the weather in your City.```*⌨️ Example:*.weather Colombo\n\n🎯 Command: *.ocr*\n📝 Description:```Reads the text on the photo you have replied to. It works English Languages Photo. Not Support Sinhala.```\n\n🎯 Command: *.calc*\n📝 Description:```Performs simple math operations.```\n\n🎯 Command: *.trt*\n📝 Description:```It translates with Google Translate. You must reply to any message.```\n*⌨️ Example:*.trt en si (From English to Sinhala)\n\n🎯 Command: *.ss*\n📝 Description:```Takes a screenshot from the page in the given link.```\n\n⭕ ```Can Use Only English Characters...!```\n\n⚠️ Warning!\n *Please, Do not Access to Use Private Use this bot* ❌\n*Using the bot out of purpose will explicitly ban you.*\n\n*𝓙𝓮𝓼𝓼𝓲𝓮 Bot Owner* - 𝚃𝚑𝚊𝚛𝚒𝚗𝚍𝚞 𝙳𝚑𝚊𝚗𝚞𝚜𝚑𝚔𝚊\n𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝓂𝑒 - wa.me/+94769183064');

    }));
}
