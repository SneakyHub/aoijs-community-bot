module.exports = ({
    name: "unlock",
    usage: "unlock <channel>",
    description: "Unlocks the specified channel or will unlock the current channel.",
    category: "Moderation",
    code: `$modifyChannelPerms[$get[chan];+sendmessages;$guildID]
Successfully unlocked <#$get[chan]>!!
$onlyIf[$get[chan]!=undefined;**⛔ Please specify a valid channel!!**]
$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]
$onlyPerms[managechannels;**⛔ You dont have required perms to do it!!**]
$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;**I don't have the perms to do it!!**]`
});
