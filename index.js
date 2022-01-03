const Discord = require("discord.js")
require("dotenv").confing()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"

    ]
})
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
    if (message.content =="salut"){
        message.reply("Buna sclav al vantului,speram ca te-ai spalat la pula astazi ca nu vrem sa miroasa rau aerul!")

    }
})

client.on("messageCreate", (message) => {
    if (message.content =="manelele sunt gay"){
        message.reply("Intr-adevar, manelele sunt pentru oamenii gay si negrii. Cum sa asculti manele intr-un mod neironic coaie? Ti s-a urcat vantul la cap???")
    }
})
client.on("messageCreate", (message) => {
    if (message.content =="Care este cel mai de chads rol din lol?"){
        message.reply("Suport evident, mai ales cand ma folosesti pe mine OwO")
    }
})
client.on("messageCreate", (message) => {
    if (message.content =="mil bei?"){
        message.reply("mi-l sugi? mi-l bei? mi-l ghidezi? mi-l scoli? mi l anini? mi-l ungi Mi l spovedesti mi l antropomorfizezi mi-l paști? mi l asterni mi-l adaugi? mi-l iubesti? mi-l ațâți? mi-l pleci mi-l scuturi? mi-l treci mi-l impartasesti mi-l imbeti mi l balotezi? mi-l ineci mi-l impaci mi-l zgarii? mi-l mariti? mi l marinezi mi-l conduci mi-l fixezi? mi l cuibaresti mi-l inghiti mi-l hartuiesti mi l bulezi mi-l vorbesti? mi-l ocrotesti mi-l anuntezi mi-l postezi mi-l shareuiesti mi-l doresti mi l biciuiesti??? mi-l joci mi-l snapuiesti mi l inflacarezi mi-l indragostesti mi-l dormi mi-l omori mi l imbalsamezi mi-l dianezi mi-l desenezi mi-l improspatezi mi-l maimutaresti mi l revigorezi? mi-l promovszi mi-l sarbatoresti mi l bâjbâi? mi-l incurajezi mi l bâțâi? mi-l ratezi mi-l sutezi mi-l traiestimi-l sugi? mi-l bei? mi-l ghidezi? mi-l scoli? mi l anini? mi-l ungi Mi l spovedesti mi l antropomorfizezi mi-l paști? mi l asterni mi-l adaugi? mi-l iubesti? mi-l ațâți? mi-l pleci mi-l scuturi? mi-l treci mi-l impartasesti mi-l imbeti mi l balotezi? mi-l ineci mi-l impaci mi-l zgarii? mi-l mariti? mi l marinezi mi-l conduci mi-l fixezi? mi l cuibaresti mi-l inghiti mi-l hartuiesti mi l bulezi mi-l vorbesti? mi-l ocrotesti mi-l anuntezi mi-l postezi mi-l shareuiesti mi-l doresti mi l biciuiesti??? mi-l joci mi-l snapuiesti mi l inflacarezi mi-l indragostesti mi-l dormi mi-l omori mi l imbalsamezi mi-l dianezi mi-l desenezi mi-l improspatezi mi-l maimutaresti mi l revigorezi? mi-l promovszi mi-l sarbatoresti mi l bâjbâi? mi-l incurajezi mi l bâțâi? mi-l ratezi mi-l sutezi mi-l traiesti mi l biostimulezi mi-l descarci mi-l doresti mi l aselenizezi mi-l analizeziiii mi-l asezi mi-l ridici")
    }
})


client.login(process.env.Token)
