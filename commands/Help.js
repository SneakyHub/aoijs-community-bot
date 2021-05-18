module.exports = ({
name: "help",
usage: "\`+help (command name)\`",
description: "Shows all commands and if specified a command name shows the info of that command",
code: `$title[Help]
$author[$userTag[$authorID];$authorAvatar]
$addField[$replaceText[$replaceText[$checkCondition[$message==];true;$get[helpn]];false;$get[cmdn]];**\`\`\`kt
$replaceText[$replaceText[$checkCondition[$message==];true;$get[help]];false;$get[cmd]]\`\`\`**;yes]
$addField[> Prefix for $serverName;\"$get[p]\";yes]
$let[helpn;> **All Commands**[$commandsCount]]
$let[help;$get[p]ping, $get[p]setmuterole, $get[p]mute, $get[p]unmute, $get[p]tempmute, $get[p]resetmute, $get[p]userinfo, $get[p]serverinfo, $get[p]refresh, $get[p]stats, $get[p]prefix, $get[p]eval, $get[p]exec, $get[p]reboot.
For seeing more info of a specific command type $get[p]help (command name).]
$let[cmdn;$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]!=];true;$get[cmn]];false;ERROR]
$let[cmd;$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]!=];true;$get[cm]];false;**No commands found with that name!!**]
$let[cmn;> **$commandInfo[$message;name] Info**]
$let[cm;**Aliases**: $replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]!=];true;$commandInfo[$message;aliases]];false;No aliases]
**Usage**: $commandInfo[$message;usage]
**Description**: $commandInfo[$message;description]]
$let[p;$getServerVar[prefix]]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]`
});
