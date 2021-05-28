module.exports = ({
    name: "ban",
    usage: "ban <user> (reason)",
    description: "Bans the specified user",
    code: `$title[Banned]
$description[Successfully Banned $userTag[$get[user]]]
$addField[Moderator:;$userTag;no]
$addField[Reason:;$get[reason];no]
$color[RANDOM]
$addTimestamp
$thumbnail[$userAvatar[$get[user]]]
$ban[$get[user];$userTag: $get[reason];7]
$let[reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason was provided.];false;$messageSlice[1]]]
$onlyBotPerms[ban;**⛔ I need \`BAN_MEMBERS\` perms to ban a user!!**]
$onlyIf[$isBanned[$get[user]]==false;**⛔ That user is already banned!!**]
$onlyIf[$get[user]!=$ownerID;**⛔ You can't ban the owner of the server!!**]
$onlyIf[$get[user]!=$authorID;**⛔ It is not good to harm yourself 😢!!**]
$onlyIf[$memberExists[$get[user]]==false;]
$onlyIf[$get[user]!=undefined;]
$onlyIf[$message[1]!=;]
$onlyPerms[ban;]
$let[user;$findUser[$message[1];no]]
$suppressErrors[Error Occurred!!]`
})
