module.exports = ({
  name: "unmute",
  code: `$takeRoles[$findUser[$message[1]];$findRole[$getServerVar[mute]]]
$title[UnMuted $userTag[$findUser[$message[1]]]]
$description[**$username** **has unmuted** $userTag[$findUser[$message[1]]]
**Reason:** $message[2]]
$color[RANDOM]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ Cant unmute that user as the mute role is higher/equal than me on role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ You cant unmute as the role is higher/equal than your highest role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**⛔ That user is higher/equal than you on role position!!**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**⛔ That user is higher/equal than me on role position!!**]
$onlyIf[$findUser[$message[1];no]!=undefined;**⛔ Please specify a valid user!!**]
$onlyIf[$message[1]!=;**⛔ Please specify a user!! To unmute a user type \`$getServerVar[prefix]unmute <user> <reason>\`**]
$onlyBotPerms[manageroles;**⛔ I don't have \`MANAGAGE_ROLES\` perms!!**]
$onlyPerms[manageroles;**⛔ You don't have \`MANAGAGE_ROLES\` perms!!**]
$onlyIf[$getServerVar[mute]!=;**⛔ You have not set a \`mute\` role. Please set it by typing \`$getServerVar[prefix]setmuterole\`.**]`
});
