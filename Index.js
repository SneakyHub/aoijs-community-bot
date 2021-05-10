const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
	sharding: false,
	shardAmount: 2, 
	mobile: false, 
	token: "the token",
	prefix: ["$getServerVar[prefix]"],
	fetchInvites: true
});

process.setMaxListeners(50);


bot.onReactionAdd();
bot.onReactionRemove();
bot.onLeave();
bot.onJoined();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onBanAdd();
bot.onInviteCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onRoleUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanRemove();
bot.onMessage();
bot.onMessageUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onVoiceStateUpdate();
bot.onMemberUpdate();
//commands
bot.loadCommands('./commands/');

//status
bot.status({
	text: 'Updating..',
	type: 'PLAYING',
	status: 'dnd',
	time: 60
});

bot.variables({
	prefix: '+'
});

console.log('Token');
