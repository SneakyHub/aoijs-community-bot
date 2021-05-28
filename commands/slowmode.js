module.exports = ({
    name: "slowmode",
    aliases: "sm",
    usage: "slowmode (time)",
    description: "Sets a specified slowmode to the current channel or if not specified removes the slowmode of the current channel.",
    category: "Moderation",
    code: `$slowMode[$channelID;$get[set]]
Successfully set the channel slowmode to **\`$replaceText[$replaceText[$checkCondition[$get[slow]==];true;0 second];false;$get[slow]]\`**!!
$let[slow;$humanizems[$get[time]]]
$onlyIf[$get[time]<=$math[3600000*6];**⛔ Slowmode must be less than or equal to 6h!!**]
$let[time;$math[$replaceText[$replaceText[$replaceText[$get[set];s;*1000];m;*60000];h;*3600000]]]
$onlyIf[$isNumber[$get[mode]]==true;**⛔ Please provide a valid number!! Also the slowmode must be less than or equal to 6h!!**]
$let[mode;$replaceText[$replaceText[$replaceText[$get[set];m;];h;];s;]]
$let[set;$replaceText[$replaceText[$isNumber[$get[sm]];true;$get[sm]s];false;$get[sm]]]
$let[sm;$replaceText[$replaceText[$checkCondition[$message==];true;0s];false;$message]]`
})
