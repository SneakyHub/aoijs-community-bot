module.exports = {
    name: "help",
    code: `
    $title[1;Help Menu]
    $addField[1;Developer-Use;Eval, Reload]
    $addField[1;Other;bot-stats]
    $addField[1;Fun;giveaway-start, meme]
    $addField[1;Utility;purge]
    $addField[1;Auto Moderation;coming soon:tm:]
    $addField[1;Moderation;coming soon:tm:]
    $color[1;GREEN]
    $setVar[used;$math[$getVar[used]+1]]
`
}
