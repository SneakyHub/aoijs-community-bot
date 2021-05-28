module.exports = ({
name: "eval",
usage: "+eval <code>",
description: "Evaluates the discord.js codes. Only the developers of the bot can use it!!",
category: "Developer",
code: `$addField[OUTPUT;\`\`\`kt
$djsEval[$message;yes]\`\`\`;yes]
$addField[INPUT;\`\`\`kt
$message\`\`\`;yes]
$color[RANDOM]
$onlyIf[$djsEval[$message;yes]!=undefined;]
$suppressErrors[{title:ERROR}{description:{error}}{color:RED}]
$onlyForIDs[819586427968552971;682592010661527565;742945200082780160;746113176885657701;716761186812821604;**⛔ You are not my developer to perform this action!!**]`
});
