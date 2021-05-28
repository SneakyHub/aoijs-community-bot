module.exports = ({
    name: "reply",
    code: `$sendDM[$findUser[$get[dm];no];<@$findUser[$get[dm]]>{field:$get[su]:$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];fvalue]:no}{field:**SneakyHub**:**\`\`\`\n$messageSlice[1]\n\`\`\`**:no}{footer:SneakyHub Commented on your suggestion}{thumbnail:$serverIcon}{color:RANDOM}]
$let[su;$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];field]]
$let[dm;$findUser[$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];author]]]
$channelSendMessage[$getServerVar[schan];{field:$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];field]:**$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];author]**:$getEmbed[$getServerVar[schan];$getUserVar[smsg;$message[1]];fvalue]:no}
{field:**SneakyHub**:**\`\`\`\n$messageSlice[1]\n\`\`\`**:no}{footer:SneakyHub Commented on the suggestion}{thumbnail:$serverIcon}{color:RANDOM}{timestamp:ms};no]
$sendMessage[Replied the suggestion!;no]
$addCmdReactions[✅]
$onlyIf[$message[1]<=$getServerVar[sc];**⛔ There is no suggestion in my record with that number!!**]
$onlyIf[$messageSlice[1]!=;**⛔ You must provide what you want to comment!!**]
$onlyIf[$message[1]!=;**⛔ You must provide the suggestion number you are replying to!!**]
$onlyPerms[manageserver;**⛔ You dont have enough perms to do that!!**]
$onlyIf[$getServerVar[schan]!=;**⛔ Please first setup the suggestion channel!!**]`
})
