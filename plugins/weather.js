/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');


const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: true}, async (message, match) => {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
	
    Asena.addCommand({pattern: 'movie ?(.*)', desc: Lang.MOVIE_DESC, fromMe: true}, async (message, match) => {
 
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }    

if (match[1] === '') return await message.reply(Lang.NEED_MO);  
        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`;
        try {
        const response = await got(url);
        const mojson = JSON.parse(response.body);
        if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🛑' + Lang.TITLE +'* ```' + mojson.Title + '```\n' +
        '*📊' + Lang.YEAR +'* ```' + mojson.Year + '```\n' +
        '*⚜' + Lang.RELE +'* ```' + mojson.Released + '```\n' +
        '*🎦' + Lang.RUN +'* ```' + mojson.Runtime + '```\n' +
        '*🔔' + Lang.GEN +'* ```' + mojson.Genre + '```\n' +
        '*✒' + Lang.DIREC +'* ```' + mojson.Director + '```\n' +
        '*👭' + Lang.ACT +'* ```' + mojson.Actors + '```\n' +
        '*🎬' + Lang.PLOT +'* ```' + mojson.Plot + '```\n' +
        '*📄' + Lang.LANG +'* ```' + mojson.Language + '```\n' +
        '*🌍' + Lang.COUN +'* ```' + mojson.Country + '```\n\n' +
        '*💾' + Lang.SOUR +'* ```' + mojson.Source + '```\n' +
        '*📶' + Lang.IMDRA +'* ```' + mojson.imdbRating + '```\n' +
        '*#️⃣' + Lang.VOTE +'* ```' + mojson.imdbVotes + '```\n' +
        '*🆔' + Lang.ID +'* ```' + mojson.imdbID + '```\n' +
        '*🔗' + Lang.TYPE +'* ```' + mojson.Type + '```\n' +
        '*💢' + Lang.BOX +'* ```' + mojson.BoxOffice + '```\n', MessageType.text);
    } 
    catch {
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMO, MessageType.text);
    }
    
});
	Asena.addCommand({pattern: "covid ?(.*)", desc: Lang.COV_DESC, fromMe: true}, (async (message, match) => {
    
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

if (match[1] === '') return await message.reply(Lang.NEEDCON);
	    const url = `https://coronavirus-19-api.herokuapp.com/countries`;
            try{
                const response = await got(url);
                const respod = JSON.parse(response.body);
                if (response.statusCode === 200) return await message.client.sendMessage(message.jid,'*🌐' + Lang.DF +':* ```' + match[1] + '```\n\n' +
                    '*🔔' + Lang.TOTCASE +':* ```' + respod.cases + '```\n' + 
		    '*🏥' + Lang.DAYCAS +':* ```' + respod.todayCases + '```\n' +  
		    '*⚰️' + Lang.TOTDETH +':* ```' + respod.deaths + '```\n' +
		    '*☠️' + Lang.DAYDETH +':* ```' + respod.todayDeaths + '```\n\n' +
		    '*💊' + Lang.TOTRE +':* ```' + respod.recovered + '```\n' +
                    '*😷' + Lang.ACTCAS +':* ```' + respod.active + '```\n' + 
		    '*🆘' + Lang.CRICAS +':* ```' + respod.critical + '```\n' +  
		    '*🧪' + Lang.TOTTEST +':* ```' + respod.totalTests + '```\n\n' +
		    '*🏡' + Lang.STAY +'* \n', MessageType.text);
                }
		catch {
                return await message.client.sendMessage(message.jid, Lang.NOT, MessageType.text);
            }     
});
}
if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: false}, async (message, match) => {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
	
    Asena.addCommand({pattern: 'movie ?(.*)', desc: Lang.MOVIE_DESC, fromMe: false}, async (message, match) => {
 
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }    

if (match[1] === '') return await message.reply(Lang.NEED_MO);  
        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`;
        try {
        const response = await got(url);
        const mojson = JSON.parse(response.body);
       if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🛑' + Lang.TITLE +'* ```' + mojson.Title + '```\n' +
        '*📊' + Lang.YEAR +'* ```' + mojson.Year + '```\n' +
        '*⚜' + Lang.RELE +'* ```' + mojson.Released + '```\n' +
        '*🎦' + Lang.RUN +'* ```' + mojson.Runtime + '```\n' +
        '*🔔' + Lang.GEN +'* ```' + mojson.Genre + '```\n' +
        '*✒' + Lang.DIREC +'* ```' + mojson.Director + '```\n' +
        '*👭' + Lang.ACT +'* ```' + mojson.Actors + '```\n' +
        '*🎬' + Lang.PLOT +'* ```' + mojson.Plot + '```\n' +
        '*📄' + Lang.LANG +'* ```' + mojson.Language + '```\n' +
        '*🌍' + Lang.COUN +'* ```' + mojson.Country + '```\n\n' +
        '*💾' + Lang.SOUR +'* ```' + mojson.Source + '```\n' +
        '*📶' + Lang.IMDRA +'* ```' + mojson.imdbRating + '```\n' +
        '*#️⃣' + Lang.VOTE +'* ```' + mojson.imdbVotes + '```\n' +
        '*🆔' + Lang.ID +'* ```' + mojson.imdbID + '```\n' +
        '*🔗' + Lang.TYPE +'* ```' + mojson.Type + '```\n' +
        '*💢' + Lang.BOX +'* ```' + mojson.BoxOffice + '```\n', MessageType.text);
    } 
    catch {
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMO, MessageType.text);
    }    
});

Asena.addCommand({pattern: "covid ?(.*)", desc: Lang.COV_DESC, fromMe: false}, (async (message, match) => {
    
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

if (match[1] === '') return await message.reply(Lang.NEEDCON);
	    const url = `https://coronavirus-19-api.herokuapp.com/countries`;
            try{
                const response = await got(url);
                const respod = JSON.parse(response.body);
                if (response.statusCode === 200) return await message.client.sendMessage(message.jid,'*🌐' + Lang.DF +':* ```' + match[1] + '```\n\n' +
                    '*🔔' + Lang.TOTCASE +':* ```' + respod.cases + '```\n' + 
		    '*🏥' + Lang.DAYCAS +':* ```' + respod.todayCases + '```\n' +  
		    '*⚰️' + Lang.TOTDETH +':* ```' + respod.deaths + '```\n' +
		    '*☠️' + Lang.DAYDETH +':* ```' + respod.todayDeaths + '```\n\n' +
		    '*💊' + Lang.TOTRE +':* ```' + respod.recovered + '```\n' +
                    '*😷' + Lang.ACTCAS +':* ```' + respod.active + '```\n' + 
		    '*🆘' + Lang.CRICAS +':* ```' + respod.critical + '```\n' +  
		    '*🧪' + Lang.TOTTEST +':* ```' + respod.totalTests + '```\n\n' +
		    '*🏡' + Lang.STAY +'* \n', MessageType.text);
                }
		catch {
                return await message.client.sendMessage(message.jid, Lang.NOT, MessageType.text);
            }     
});
}
