module.exports = {
    name: "reload",
    description: "Reload all the commands! (Developer Only)",
    usage: "reload",
    code:`
    $addButton[1;Removed: $replaceText[$replaceText[$checkContains[$math[$get[oldcount]-$get[newcount]];-];true;0];false;$math[$get[oldcount]-$get[newcount]]];danger;removed;yes]
    $addButton[1;Added: $replaceText[$replaceText[$checkContains[$math[$get[newcount]-$get[oldcount]];-];true;0];false;$math[$get[newcount]-$get[oldcount]]];success;added;yes]
    $addButton[1;Updated: $get[newcount];primary;updated;yes]
    $color[1;35CE8D]
    $description[1; **__Successfully reloaded all the commands!__**]
    $deleteMessage[$get[reloadid];$channelID]
    $wait[700ms]
    $let[reloadid;$sendMessage[{newEmbed: {description: **__Reloading all the commands!__**}{color:3ABEFF}};yes]]
    $let[newcount;$commandsCount]
    $updateCommands
    $let[oldcount;$commandsCount]
    $setVar[used;$math[$getVar[used]+1]]
    $onlyForIDs[830784829170778142;{newEmbed:{description:❌ You are not my Developer}{color:ff0000}}]

    `
}