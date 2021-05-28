const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const COV_DESC = "Shows the Daily and Overall Covid table of more than Countries."
const NOT = "```Sorry I Could Not Find A Country Like This..!😣```"
const NEEDCON = "ENTER YOUR COUNRTY.!"
const DF = "Datas for "
const TOTCASE = "Total Cases"
const DAYCAS = "Daily Cases"
const TOTDETH = "Total Deaths"
const DAYDETH = "Daily Deaths"
const TOTRE = "Total Recovered"
const ACTCAS = "Active Cases"
const CRICAS = "Critical Cases"
const TOTTEST = "Total Test"
const STAY = "```Stayhome Staysafe...```"

Asena.addCommand({pattern: "covid ?(.*)", desc: COV_DESC, fromMe: true}, (async (message, match) => {
    
if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

if (match[2] === '') return await message.reply(NEEDCON); {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries").then(async ok  => {
                const respod = JSON.parse(ok.body);
                await message.reply('*🌐 ' + DF +':* ```' + match[2] + '```\n' +
            '*🔔 ' + TOTCASE +':* ```' + respod.cases + '```\n' + 
		    '*🏥 ' + DAYCAS +':* ```' + respod.todayCases + '```\n\n' +  
		    '*⚰️ ' + TOTDETH +':* ```' + respod.deaths + '```\n' +
		    '*☠️ ' + DAYDETH +':* ```' + respod.todayDeaths + '```\n\n' +
		    '*💊 ' + TOTRE +':* ```' + respod.recovered + '```\n' +
                    '*😷 ' + ACTCAS +':* ```' + respod.active + '```\n' + 
		    '*🆘 ' + CRICAS +':* ```' + respod.critical + '```\n' +  
		    '*🧪 ' + TOTTEST +':* ```' + respod.totalTests + '```\n\n' +
		    '*🏡 ' + STAY +':* ```\n');
                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
    }
));
