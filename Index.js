//beginning of the bot so where it intializes the client

const Aoijs = require('aoi.js');
const config = require('config.json')
const bot = new aoijs.Bot({
    token: config.token, // More effective way of doing Tokens chacing
    prefix: "$getServerVar[prefix]",
    intents: "all" // Intents are needed for these newer versions so keep this
})


// New Command Handler for V5 subject to change via Version change/upgrade

    const loader = new aoijs.LoadCommands(bot);
    loader.load(bot.cmd,`./cmds/`)

// Updating that old old Status
bot.status({
    text: "with all of Sneakyhub!",
    type: "PLAYING",
    time: "12"
})
// For using prefixes and such
bot.variables({
	prefix: 'SNH!'
});
