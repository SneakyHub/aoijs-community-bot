module.exports = ({
    name: "serverinfo",
    usage: "\`+serverinfo\`",
    description: "Shows the info of the current server",
    aliases: "si",
    code: `$title[Info of $serverName]
$replaceText[$replaceText[$checkCondition[$serverIcon!=null];true;$thumbnail[$serverIcon]];false;]
$footer[Requested by $userTag[$authorID];$authorAvatar]
$addTimestamp
$color[RANDOM]
$addField[**Roles**[$roleCount];**Highest Role:** <@&$highestServerRole>
**Lowest Role:** <@&$lowestServerRole>;yes]
$addField[**Prefixes**;$getServerVar[prefix];yes]
$addField[**Members**[$membersCount];**Humans:** $math[$membersCount-$botCount]
**Bots:** $botCount;yes]
$addField[**Emoji**[$emojiCount[all]];**Normal:** $emojiCount[normal]
**Animated:** $emojiCount[animated];yes]
$addField[**Info**;**Name:** $serverName
**Server ID:** $guildID
**Media Content Filter:** ✅$serverContentFilter
**Verification Level:** ✅$serverVerificationLevel
**Region:** $toLocaleUppercase[$serverRegion]
**Voice:** $serverPreferredLocale
**Boost Count:** $serverBoostCount
**Boost Tier:** $serverBoostLevel;yes]
$addField[**Channels**[$channelCount];
**Category:** $channelCount[category]
**Text:** $channelCount[text]
**Voice:** $channelCount[voice];yes]
$addField[**Features**;$replaceText[$replaceText[$checkCondition[$serverFeatures!=];true;✅$serverFeatures[$guildID;
✅]];false;🚫NaN];yes]
$addField[**Owner**;$userTag[$ownerID];yes]
$suppressErrors[An Error Occurred!!]`
});
