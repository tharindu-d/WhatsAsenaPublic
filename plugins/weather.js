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

if (match[2] === '') return await message.reply(Lang.NEED_MO);  
        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${match[2]}&plot=full`;
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
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMO, MessageType.text);
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

if (match[2] === '') return await message.reply(Lang.NEED_MO);  
        const url = `https://www.omdbapi.com/?apikey=742b2d09&t=${match[2]}&plot=full`;
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
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMO, MessageType.text);
    }    
});   
}
