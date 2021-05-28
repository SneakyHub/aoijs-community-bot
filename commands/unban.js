module.exports = ({
    name: "unban",
    usage: "unban <user ID>",
    description: "Unbans the specified userID",
    category: "Moderation",
    code: `$title[Unbanned]
$description[Successfully unbanned $userTag[$get[user]].]
$addField[Reason:;$get[reason];no]
$addField[Moderator:;$userTag;no]
$color[RANDOM]
$addTimestamp
$thumbnail[$userAvatar[$get[user]]]
$unban[$get[user];By $userTag[$authorID] Reason: $get[reason]]
$let[reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason was provided.];false;$messageSlice[1]]]
$onlyBotPerms[ban;**⛔ I need \`BAN_MEMBERS\` perms to unban users!!**]
$onlyIf[$isBanned[$get[user]]==true;**⛔ The specified user is not a previously banned user!!**]
$onlyIf[$get[user]!=undefined;**⛔ Please specify a valid user to unban!!**]
$let[user;$findUser[$message[1];no]]
$onlyIf[$message[1]!=;**⛔ Please specify someone to unban!!**]
$onlyPerms[ban;**⛔ You must have \`BAN_MEMBERS\` perms to do it!!**]
$let[user;$findUser[$message[1];no]]`
})
