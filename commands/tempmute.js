module.exports = ({
    name: "tempmute",
    usage: "\`+tempmute <user> <time>\`",
    description: "Mutes the specified user temporarily for the time specified.",
    code: `$channelSendMessage[$channelID;<@$findUser[$message[1]]>, I unmuted you, time's up]
$takeRoles[$findUser[$message[1]];$findRole[$getServerVar[mute]]]
$wait[$replaceText[$replaceText[$checkCondition[$message[2]==];true;24d];false;$message[2]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $userTag[$findUser[$message[1]]] has been muted by $userTag[$authorID]
For \`$replaceText[$replaceText[$checkCondition[$message[2]==];true;undefined time];false;$message[2]]\`}{color:RANDOM}]
$giveRoles[$findUser[$message[1]];$findRole[$getServerVar[mute]]]
$suppressErrors[{title:An error occured}{description:Looks like I can't find the role}{color:RED}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ Cant perform the action as the mute role is higher/equal than me on role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**⛔ You cant mute someone who is higher/equal than you on role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ You cant mute someone as the mute role is higher/equal than you on role position!!**]
$onlyIf[$roleExists[$findRole[$getServerVar[mute]]]==true;**⛔ You have not set a mute role!! Set it by typing \`$getServerVar[prefix]setmuterole <role>\`!!**]
$onlyIf[$userExists[$findUser[$message[1];no]]==true;**⛔ Please specify a valid user!!**]
$onlyIf[$message[1]!=;**⛔ Specify a user whom you want to mute!!**]
$onlyBotPerms[manageroles;{title:Missing Permissions}{color:RANDOM}{description:I don't have \`MANAGE_ROLES\` permissions to use this command}]
$onlyPerms[manageroles;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`MANAGE_ROLES\` permissions to use this command}]`
    });
