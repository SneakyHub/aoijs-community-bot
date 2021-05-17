module.exports = ({
  name: "mute",
  usage: "\`+mute <user> (reason)\`",
  description: "Mutes the specified user. Reason is optional.",
  code: `$giveRoles[$findUser[$message[1]];$findRole[$getServerVar[mute]]]
$title[Muted $userTag[$findUser[$message[1]]]]
$description[**$username** **has muted** $userTag[$findUser[$message[1]]]
**Reason:** $message[2]]
$color[RANDOM]
$onlyIf[$roleExists[$findRole[$getServerVar[mute]]]==true;<@$authorID>,**⛔ Please set a mute role first!!**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ Cant mute that user as the mute role is higher/equal than me on role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$findRole[$getServerVar[mute]]];**⛔ You cant mute as the role is higher/equal than your highest role position!!**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**⛔ That user is higher/equal than you on role position!!**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**⛔ That user is higher/equal than me on role position!!**]
$onlyIf[$findUser[$message[1];no]!=undefined;**⛔ Please specify a valid user!!**]
$onlyIf[$message[1]!=;**⛔ Please specify a user!! To mute a user type \`$getServerVar[prefix]mute <user> <reason>\`**]
$onlyBotPerms[manageroles;**⛔ I don't have \`MANAGAGE_ROLES\` perms!!**]
$onlyPerms[manageroles;**⛔ You don't have \`MANAGAGE_ROLES\` perms!!**]
$onlyIf[$getServerVar[mute]!=;**⛔ You have not set a \`mute\` role. Please set it by typing \`$getServerVar[prefix]setmuterole\`.**]`
});
