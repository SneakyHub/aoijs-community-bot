const Aoijs = require('aoi.js');
const config = require('./configs/config.json')
const bot = new aoijs.Bot({
    token: config.token,
    prefix: "$getServerVar[prefix]",
    intents: "all"
})

//server only
bot.onMessage({
    guildOnly: true
})

//commands

    const loader = new aoijs.LoadCommands(bot);
    loader.load(bot.cmd,`./cmds/`)

//status
bot.status({
	text: 'With all of the members of sneakyhub',
	type: 'PLAYING',
	time: 12
});

bot.variables({
	prefix: 'SNH!'
});
