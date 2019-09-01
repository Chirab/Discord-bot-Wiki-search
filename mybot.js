const discord = require('discord.js')
const url = require('url');
const iencli = new discord.Client()

iencli.on('ready', () => {
    console.log("Connected as " + iencli.user.tag)
    iencli.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })

    let gen = iencli.channels.get(xxxxxx) // replace with channel text id
})

iencli.on('message', (data) => {
    if (data.author == iencli.user)
        return
    if (data.content.startsWith("wiki")) {
        var fr = "fr"
        var en = "en"
        if (data.content.match(fr)) {
            const frParse = Parse(data, 7)
            const frApiWiki = url.resolve('https://fr.wikipedia.org/wiki/', frParse)
            data.channel.send(frApiWiki)
            return
        }
        if (data.content.match(en)) {
            const enparse = Parse(data, 7)
            const enapiWiki = url.resolve('https://en.wikipedia.org/wiki/', enparse)
            data.channel.send(enapiWiki)
            return
        }
        const parsedata = Parse(data, 4)
        const apiWiki = url.resolve('https://fr.wikipedia.org/wiki/', parsedata)
        data.channel.send(apiWiki)
        console.log(apiWiki)
    }
})

function Parse(data, num) {
    let cmd = data.content.substr(num)
    return cmd
}

iencli.login(xxxx) //replace with your app discord's tokken