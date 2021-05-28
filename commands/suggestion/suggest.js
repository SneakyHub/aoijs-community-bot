module.exports = ({
 name: "suggest",
 code: `$setServerVar[sc;$sum[$getServerVar[sc];1]]
$setUserVar[smsg;$splitText[1];$sum[$getServerVar[sc];1]]
$textSplit[$channelSendMessage[$getServerVar[schan];{author:$userTag[$authorID]:$authorAvatar}{field:**Suggestion #$sum[$getServerVar[sc];1]**:

**\`\`\`
$message\`\`\`**:yes}
{field:Reactions:👍 Like it! | 👎 Don't like it! | 🤷 Don't Know!:yes}
{footer:$authorID | SneakyHub}{color:RANDOM}{reactions:👍,👎,🤷};yes]; ]
$addCmdReactions[✅]
$sendMessage[Suggestion Posted!;no]
$cooldown[5m;**⛔ It looks like you suggested within 5 min. Please wait for \`%time%\` to make another suggestion!!**]
$onlyIf[$message!=;**⛔ You must specify the suggestion!!**]
$onlyIf[$getServerVar[schan]!=;**⛔ You need to set a suggestion channel first!!**]`
})
