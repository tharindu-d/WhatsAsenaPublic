const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const QUOTE_DESC = "It Sends Random Quote"
const NEED_LOCATIONA = "*Invalid Request*"
const QUOTE = "Quote :"
const AUTHOR = "Author :"
const NOT_FOUNDA = "```Sorry,I could not find a quote. 😖```"
const DFACT_DESC = "It Sends Random Dog Facts"
const DFACT = "FACTS :"
const NOT_DFACT = "```Sorry,I could not find a Fact. 😖```"
const ACT = "ACTIVITY :"
const TYPE = "TYPE :"
const ACT_DESC = "It Sends Random Activity You can do"
const NOT_ACT = "```Sorry,I could not find a Activity. 😖```"
const JOKE_DESC = "It Sends Random Joke"
const JOKE = "Joke :"
const NOT_JOKE = "```Sorry,I could not find a Joke. 😖```"

Asena.addCommand({pattern: 'quote ?(.*)', fromMe: false, desc: QUOTE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.quotable.io/random`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + QUOTE +'* ```' + json.content + '```\n\n' +
		'*✒️' + AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text);
	}
});

Asena.addCommand({pattern: 'dfact ?(.*)', fromMe: false, desc: DFACT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://some-random-api.ml/facts/dog`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🐶 ' + DFACT +'* ```' + json.fact + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_DFACT, MessageType.text);
	}
});

Asena.addCommand({pattern: 'activity ?(.*)', fromMe: false, desc: ACT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://www.boredapi.com/api/activity`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🏷 ' + TYPE +'* ```' + json.type + '```\n\n' +
		'*💥' + ACT +'* ```' + json.activity+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_ACT, MessageType.text);
	}
});

Asena.addCommand({pattern: 'jokes ?(.*)', fromMe: false, desc: JOKE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://official-joke-api.appspot.com/random_joke`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🤡 ' + JOKE +'* ```' + json.setup + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, NOT_JOKE, MessageType.text);
	}
});

