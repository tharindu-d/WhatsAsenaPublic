const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Set of commands to convert text into effective images."
const NEED_WORD = "*You Must Enter a Word*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💻Usage: *.wolf*\nℹ️Desc: It Sends a wolf metal style image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.pornhub*\nℹ️Desc: It Sends a blackish orange coloured image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.sandwriting*\nℹ️Desc: It Sends a sand image of the text provided.\n\n💻Usage: *.blackpink*\nℹ️Desc: It Sends a blackish pink image of the text provided.\n\n💻Usage: *.lovemsg*\nℹ️Desc: It Sends love message style image of the text provided.\n\n💻Usage: *.grass*\nℹ️Desc: It Sends a grass image of the text provided.\n\n💻Usage: *.blood*\nℹ️Desc: It Sends a blood image of the text provided.\n\n💻Usage: *.romance*\nℹ️Desc: It Sends a green image with love shapes of the text provided.\n\n💻Usage: *.candlemug*\nℹ️Desc: It Sends a mug image of the text provided.\n\n💻Usage: *.snow*\nℹ️Desc: It Sends a snow image of the text provided.\n\n💻Usage: *.cloud*\nℹ️Desc: It Sends a sky image of the text provided\n\n💻Usage: *.underwater*\nℹ️Desc: It Sends a ocean image of the text provided\n\n💻Usage: *.flower*\nℹ️Desc: It Sends a flower image of the text provided\n\n💻Usage: *.burn*\nℹ️Desc: It Sends a half burned paper image of the text provided\n\n💻Usage: *.candy*\nℹ️Desc: It Sends a candy image of the text provided\n\n💻Usage: *.wood*\nℹ️Desc: It Sends a wood carved image of the text provided.\n\n💻Usage: *.latte*\nℹ️Desc: It put the text as latte art within a coffee cup.\n\n💻Usage: *.8bit*\nℹ️Desc: Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.shadow*\nℹ️Desc: Converts the text into shadow themed image.\n\n💻Usage: *.harrypotter*\nℹ️Desc: Converts the text into a harrypotter themed image.\n\n💻Usage: *.sparkling*\nℹ️Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *.watercolour*\nℹ️Desc: Converts the text into a watercolour themed image.\n\n💻Usage: *.ninjalogo*\nℹ️Desc: Enters the text as the caption for a ninja themed logo.\n\n💻Usage: *.neonlight*\nℹ️Desc: Converts the text into a neonlight themed image.\n\n💻Usage: *.rainbow*\nℹ️Desc: Converts the provided text into a rainbow style image.');

    }));

    Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));


    Asena.addCommand({pattern: '3dgradient ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'logo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'page ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'leavest ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 𝓙𝓮𝓼𝓼𝓲𝓮 🔥'})

    }));

    Asena.addCommand({pattern: 'rainbowbg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'waterco ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'ttok ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by 𝓙𝓮𝓼𝓼𝓲𝓮 🔥'})

    }));

    Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'tfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'phub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'multimaterial ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/multimaterial?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'videomaker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/videomaker/bold?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'colorfulv ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'techneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/neon?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: '3dbox ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'snowtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));
}


































else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'effectimg', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💻Usage: *.wolf*\nℹ️Desc: It Sends a glitch style image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *.3dtext*\nℹ️Desc: Converts the provided text into a 3D style image.');

    }));

    Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));


    Asena.addCommand({pattern: '3dgradient ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'logo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'page ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'leavest ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'rainbowbg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'waterco ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'aveng ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=Jessie&text2=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'ttok ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'tfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'phub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=Jessie-X&text2=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'multimaterial ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/multimaterial?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'videomaker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/videomaker/bold?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'colorfulv ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'techneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/neon?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: '3dbox ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'snowtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})

    }));
    
    Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})
    
    }));
    
    Asena.addCommand({pattern: 'eimg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})
  
    }));

     Asena.addCommand({pattern: 'robo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://robohash.org/${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥'})
    
     }));
}
