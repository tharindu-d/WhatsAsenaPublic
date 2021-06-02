const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "```Downloads Image/Video From Instagram..```"
const NEED_WORD = "```Must Enter a link```"
const FBDESC = "```Downloads Video From FaceBook```"
const LOADING = "```Downloading the Video...```"
const NOT_FOUNDFB = "```Video Not Found..```😣"
const CAPTION = "⬇"

Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: false, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage("```Downloading the Post...```")

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Invaild Link, Please Enter a Vaild Instagram Link..!")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {

     const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(LOADING)

    await axios
      .get(`https://api.xteam.xyz/dl/fb?url=${userName}/&APIKEY=e54e1ba7d7df547a`)
      .then(async (response) => {
        const {
          contentUrl,
          description,
        } = response.data.result

        const profileBuffer = await axios.get(contentUrl, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${description}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "★ 𝙼𝚊𝚍𝚎 𝚋𝚢 𝙹𝚎𝚜𝚜𝚒𝚎 💝🔥"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)
