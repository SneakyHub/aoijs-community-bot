module.exports = ({
  name: "ui",
  aliases: ["user","whois","userinfo"],
  code: `$title[USER INFO]
$addField[> Status:;$status[$get[user]];no]
$addField[> Platform:;$replaceText[$replaceText[$replaceText[$replaceText[$platform[$get[user]];none;<a:wrong:842648734171922443> **\`Offline\`**];web;🌐 **\`Web\`**];mobile;📱 **\`Mobile\`**];desktop;🖥 **\`PC\`**];no]
$addField[> Hoisted Role:;<@&$hoistedRole[$get[user]]>;no]
$addField[> Highest Role:;<@&$highestRole[$get[user]]>;no]
$addField[> Roles [$userRoleCount[$get[user]]];$replaceText[$replaceText[$checkCondition[$get[role]!=];true;$get[role]];false;**\`There is no roles to be listed!!\`**];no]
$addField[> Custom Status:;$replaceText[$get[status1];none;]$replaceText[$replaceText[$checkCondition[$get[status2]!=none];true;**\`$get[status2]\`**];false;**\`NaN\`**];no]
$addField[> Is The user a bot?; **\`$toLocaleUppercase[$isBot[$get[user]]]\`**;no]
$addField[> Created At:;**\`$get[created]
($creationDate[$get[user];time] ago)\`**;no]
$addField[> Joined Server At:;**\`$get[time]
($memberJoinedDate[$get[user];time] ago)\`**;no]
$addField[> User ID:; **\`$get[user]\`**;no]
$addField[> User Name:; **\`$userTag[$get[user]]\`**;no]
$color[RANDOM]
$footer[Requested by $username]
$thumbnail[$userAvatar[$get[user]]]
$addTimestamp
$botTyping
$let[role;$replaceText[$replaceText[$checkCondition[$userRoleCount[$get[user]]>15];true;**\`Too many roles to be listed!!\`**];false;$userRoles[$get[user];mentions; , ]]]
$let[created;$djsEval[const moment = require('moment')
const format = "LLLL"
var date = new Date("$creationDate[$get[user]]");
datetime = moment(date).format(format);;yes]]
$let[time;$djsEval[const moment = require('moment')
const format = "LLLL"
var date = new Date("$memberJoinedDate[$get[user]]" );
datetime = moment(date).format(format);;yes]]
$let[status1;$getCustomStatus[$get[user];emoji]]
$let[status2;$getCustomStatus[$get[user];state]]
$onlyIf[$get[user]!=undefined;**⛔ Please specify a valid user!!**]
$let[user;$replaceText[$replaceText[$checkCondition[$message==];true;$authorID];false;$findUser[message;no]]]`
});
