module.exports = ({
 name: "suggest",
 usage: "suggest <suggestion>",
 description: "Posts a suggestion to the default suggestion channel.",
 category: "General",
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
$onlyIfMessageContains[$channelPermissionsFor[$getServerVar[schan];$clientID];Send Messages;Embed Links;Read Message History;**⛔ I dont have permissions to post the suggestion. Please make sure to give permission in the suggestion channel!!**]
$onlyIf[$message!=;**⛔ You must specify the suggestion!!**]
$onlyIf[$getServerVar[schan]!=;**⛔ You need to set a suggestion channel first!!**]`
})
