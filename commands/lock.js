module.exports = ({
    name: "lock",
    usage: "lock <channel>",
    description: "Locks the specified channel or will lock the current channel.",
    category: "Moderation",
    code: `$modifyChannelPerms[$get[chan];-sendmessages;$guildID]
Successfully locked <#$get[chan]>!!
$onlyIf[$get[chan]!=undefined;**⛔ Please specify a valid channel!!**]
$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]
$onlyPerms[managechannels;**⛔ You dont have required perms to do it!!**]
$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;**I don't have the perms to do it!!**]`
});
