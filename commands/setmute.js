module.exports = ({
    name: "setmuterole",
    usage: "\`+setmuterole <role>\`",
    description: "Sets the specified role as the muterole of the server.",
    code: `$setServerVar[mute;$findRole[$message]]
$title[Mute Role Set!!]
$description[$username set <@&$findRole[$message]> as the mute role!!]
$thumbnail[$authorAvatar]
$color[RANDOM]
$addTimestamp
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$message]];**⛔ That role is higher/equal than me on role position!!**]
$onlyIf[$roleExists[$findRole[$message]]==true;Please specify a valid role!!]

$onlyIf[$getServerVar[mute]==;**⛔ Your mute role is already set to <@&$getServerVar[mute]>.Please reset that for setting a new mute role!!**]
$onlyIf[$message!=;**⛔ Please specify a role for setting it as mute role!!**]

$onlyPerms[manageserver;You dont have \`MANAGE SERVER\` perms to perform this action!!]`
    });
