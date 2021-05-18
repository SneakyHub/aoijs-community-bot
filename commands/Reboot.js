module.exports = ({
name: "reboot",
aliases: "restart",
usage: "\`+reboot\`",
description: "Reboots the bot. Its limited to only developers of the bot!!",
code: `$reboot[Index.js]
$sendMessage[{field:**⚠️ Warning ⚠️**:**\`\`\`
Manual Reboot has started by $userTag[$authorID]!! Now i will stop to respond to all commands for 1-2 min!\`\`\`**:yes}{color:RANDOM}{timestamp:ms}{thumbnail:$userAvatar[$clientID]};no]
$onlyForIDs[742945200082780160;746113176885657701;716761186812821604;682592010661527565;819586427968552971;**⛔ Only my developers can perform this action!!**]`
});
