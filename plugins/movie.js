const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');


// List
const MOVIE_DESC = "It Sends Your Enter MOVIE Details"
const NEED_MO = "*Enter Your MOVIE Name..!*"
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
const NOT_FOUNDMO = "```Sorry,I could not your Movie 😖```"


Asena.addCommand({pattern: 'movie ?(.*)', fromMe: true, desc: MOVIE_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_MO);
  
  var moviename, year;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        year = split[1];
        moviename = split[0];
    }   

        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${moviename}&y=${year}&plot=full`;
        try {
        const response = await got(url);
        const mojson = JSON.parse(response.body);

        var image = await axios.get (mojson.Poster, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png})

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
        '*💢' + BOX +'* ```' + mojson.BoxOffice + '```\n' +
        '*📱' + MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
    } 
    catch {
        return await message.client.sendMessage(message.jid, NOT_FOUNDMO, MessageType.text);
    }
    
    }));   