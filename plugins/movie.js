const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const MLang = Language.getString('weather');

// List
const TITLE = "Title :"
const YEAR = "Year :"
const RELE = "Released :"
const RUN = "Runtime :"
const GEN = "Genre :"
const DIREC = "Director :"
const ACT = "Actors :"
const PLOT = "Plot :"
const LANG = "Language :"
const COUN = "Country :"
const SOUR = "Source :"
const IMDRA = "imdbRating :"
const VOTE = "imdbVotes :"
const ID = "imdbID :"
const TYPE = "Type :"
const BOX = "BoxOffice :"

Asena.addCommand({pattern: 'movie ?(.*)', desc: MLang.MOVIE_DESC, fromMe: true}, async (message, match) => {
 
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
    

if (match[1] === '') return await message.reply(MLang.NEED_MO);  
        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`;
        try {
        const response = await got(url);
        const mojson = JSON.parse(response.body);
        if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🛑' + TITLE +'* ```' + mojson.Title + '```\n' +
        '*📊' + YEAR +'* ```' + mojson.Year + '```\n' +
        '*⚜' + RELE +'* ```' + mojson.Released + '```\n' +
        '*🎦' + RUN +'* ```' + mojson.Runtime + '```\n' +
        '*🔔' + GEN +'* ```' + mojson.Genre + '```\n' +
        '*✒' + DIREC +'* ```' + mojson.Director + '```\n' +
        '*👭' + ACT +'* ```' + mojson.Actors + '```\n' +
        '*🎬' + PLOT +'* ```' + mojson.Plot + '```\n' +
        '*📄' + LANG +'* ```' + mojson.Language + '```\n' +
        '*🌍' + COUN +'* ```' + mojson.Country + '```\n\n' +
        '*💾' + SOUR +'* ```' + mojson.Source + '```\n' +
        '*📶' + IMDRA +'* ```' + mojson.imdbRating + '```\n' +
        '*#️⃣' + VOTE +'* ```' + mojson.imdbVotes + '```\n' +
        '*🆔' + ID +'* ```' + mojson.imdbID + '```\n' +
        '*🔗' + TYPE +'* ```' + mojson.Type + '```\n' +
        '*💢' + BOX +'* ```' + mojson.BoxOffice + '```\n', MessageType.text);
    } 
    catch {
        return await message.client.sendMessage(message.jid, MLang.NOT_FOUNDMO, MessageType.text);
    }
    
});   
