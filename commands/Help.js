module.exports = ({
name: "help",
usage: "\`+help (command name)\`",
description: "Shows all commands and if specified a command name shows the info of that command",
code: `$title[Help Menu]
$footer[$userTag[$authorID];$authorAvatar]
$description[> **Prefix for $serverName:** **\`\"$get[p]\"\`**]
$addField[$replaceText[$replaceText[$checkCondition[$message==];true;$get[helpn]];false;$get[cmdn]];$replaceText[$replaceText[$checkCondition[$message==];true;$get[help]];false;$get[cmd]];yes]
$let[helpn;> **All Commands**[$commandsCount]]
$let[help;> **Bot Info:**\n**\`$get[p]$djsEval[client.bot_commands.filter(x=>x.category =="BotInfo").map(x=>x.name).join(",$get[p]");yes]\`**
> **General:**\n**\`$get[p]$djsEval[client.bot_commands.filter(x=>x.category =="General").map(x=>x.name).join(",$get[p]");yes]\`**
> **Moderation:**\n**\`$get[p]$djsEval[client.bot_commands.filter(x=>x.category =="Moderation").map(x=>x.name).join(",$get[p]");yes]\`**
> **Developer:**\n**\`$get[p]$djsEval[client.bot_commands.filter(x=>x.category =="Developer").map(x=>x.name).join(",$get[p]");yes]\`**

For seeing more info of a specific command type $get[p]help (command name).]
$let[cmdn;$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]!=];true;$get[cmn]];false;ERROR]
$let[cmd;$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]!=];true;$get[cm]];false;**No commands found with that name!!**]
$let[cmn;> **$commandInfo[$message;name] Command Info**]
$let[cm;> **Aliases**:\n$replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]!=];true;$commandInfo[$message;aliases]];false;No aliases]
> **Usage**:\n$commandInfo[$message;usage]
> **Description**:\n**\`$commandInfo[$message;description]\`**
> **Category**:\n**\`$commandInfo[$message;category]\`**]
$let[p;$getServerVar[prefix]]
$color[RANDOM]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]`
});
