const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const IPSTATUS_DESC = "It Sends Your IP details"
const NEED_IP = "*Enter Your IP Address..!*"
const IP = "IP :"
const ST = "STATUS :"
const CONTINENT = "CONTINENT :"
const COUNTRY = "COUNTRY :"
const COUNTRYCODE = "COUNTRYCODE :"
const REGIONNAME = "REGIONNAME :"
const CITY = "CITY :"
const ZIP = "ZIP :"
const CURRENCY = "CURRENCY :"
const ISP = "ISP :"
const AS = "ISPALL :"
const MOBILE = "MOBILE :"
const PROXY = "PROXY :"
const NOT_FOUNDIP = "```Sorry,I could not your IP 😖```"
const IPDO = "☠️ ```Your IP HIDDEN..!```"

Asena.addCommand({pattern: 'ipstatus ?(.*)', fromMe: false, desc: IPSTATUS_DESC}, async (message, match) => {
    
    if (match[2] === 'xx') {
        try{
            const respo = await got("https://api.ipify.org").then(async ok => {
                const resp = JSON.parse(ok.body);
                /*await message.reply(`☠️ *Your IP Address:* ${resp}`);*/

            });

        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }

    }
    
    else if (message.jid === '905524317852-1612300121@g.us') {

        return;
    }
    
    
    if (match[1] === "${resp}") return await message.reply(NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/?q=${match[1]}`;
	try {
		const response = await got(url);
		const ipjson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + IP +'* ```' + IPDO + '```\n\n' +
		'*✅' + ST +'* ```' + ipjson.status+ '```\n' +
        '*🌐' + CONTINENT +'* ```' + ipjson.continent+ '```\n' +
        '*🗺' + COUNTRY +'* ```' + ipjson.country+ '```\n' +
        '*🔢' + COUNTRYCODE +'* ```' + ipjson.countryCode+ '```\n' +
        '*🌍' + REGIONNAME +'* ```' + ipjson.regionName+ '```\n' +
        '*🚩' + CITY +'* ```' + ipjson.city+ '```\n' +
        '*🏛' + ZIP +'* ```' + ipjson.zip+ '```\n' +
        '*💸' + CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
        '*📡' + ISP +'* ```' + ipjson.isp+ '```\n' +
        '*🧿' + AS +'* ```' + ipjson.as+ '```\n' +
        '*🛡' + PROXY +'* ```' + ipjson.proxy+ '```\n' +
        '*📱' + MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDIP, MessageType.text);
	}
});