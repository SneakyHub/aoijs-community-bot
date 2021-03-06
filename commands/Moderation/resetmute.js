module.exports = ({
    name: "resetmute",
    usage: "\`+resetmute\`",
    description: "Resets the mute system of the server.",
    category: "Moderation",
    code: `$setServerVar[mute;]
$title[Reset MuteRole]
$description[**$userTag[$authorID]** has reset the mute role of this server!!]
$thumbnail[$authorAvatar]
$color[RANDOM]
$addTimestamp
$onlyIf[$getServerVar[mute]!=;**⛔ Your mute role is already reset. Please set it first to reset it again!!**]
$onlyPerms[manageserver;**⛔ You dont have \`MANAGE SERVER\` perms to perform this action!!**]`
    });
