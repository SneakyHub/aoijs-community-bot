module.exports = ({
name: "exec",
usage: "**\`+exec <cmd>\`**",
description: "Executes commands in the console.It is useful for installing new package without restart. It is also limited to only developers of the bot!!",
code: `$title[Command Executed]
$addField[OUTPUT:;\`\`\`kt
$exec[$message]\`\`\`;yes]
$addField[INPUT:;\`\`\`kt
$message\`\`\`;yes]
$color[RANDOM]
$log[(console@$username) $message]
$onlyForIDs[716761186812821604;746113176885657701;742945200082780160;682592010661527565;819586427968552971;**⛔ Only My Developers can execute this!!**]`
});
