module.exports = {
    name: "purge",
    aliases: ["c", "clear", "p"],
    code: `
    $onlyPerms[managemessages;Manage Messages permissions is Required to use this.]
    $clear[$message]
    $title[1;Sneakyhub]
    $description[\`$message\` Messages have been deleted. ]
    $argsCheck[1;{newEmbed:{title: Error: Please put in a Number/Value!}}]
    $setVar[used;$math[$getVar[used]+1]]
    `
}