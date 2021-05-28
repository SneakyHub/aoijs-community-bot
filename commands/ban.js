module.exports = ({
    name: "ban",
    usage: "ban <user> (reason)",
    description: "Bans the specified user",
    category: "Moderation",
    code: `$title[Banned]
$description[Successfully Banned $userTag[$get[user]]]
$addField[Moderator:;$userTag;no]
$addField[Reason:;$get[reason];no]
$color[RANDOM]
$addTimestamp
$thumbnail[$userAvatar[$get[user]]]
$ban[$get[user];$userTag: $get[reason];7]
$let[reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason was provided.];false;$messageSlice[1]]]
$onlyIf[$rolePosition[$highestRole[$get[user]]]>$rolePosition[$highestRole[$clientID]];**⛔ I can't ban someone higher/equal to my role postion!!**]
$onlyBotPerms[ban;**⛔ I need \`BAN_MEMBERS\` perms to ban a user!!**]
$onlyIf[$rolePosition[$highestRole[$get[user]]]>$rolePosition[$highestRole[$authorID]];**⛔ You can't ban someone higher/equal than you on role position!!**]
$onlyIf[$isBanned[$get[user]]==false;**⛔ That user is already banned!!**]
$onlyIf[$memberExists[$get[user]]==true;]
$onlyIf[$get[user]!=$ownerID;**⛔ You can't ban the owner of the server!!**]
$onlyIf[$get[user]!=$authorID;**⛔ It is not good to harm yourself 😢!!**]
$onlyIf[$get[user]!=undefined;**⛔ Please specify a valid user!!**]
$onlyIf[$message[1]!=;**⛔ Please specify a user you want to ban!!**]
$onlyPerms[ban;**⛔ You must have \`BAN_MEMBERS\` perms to perform this action!!**]
$let[user;$findUser[$message[1];no]]
$suppressErrors[Error!]`
})
