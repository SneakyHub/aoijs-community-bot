module.exports = ({
    name: "aoi",
    usage: "+aoi <code>",
    description: "Evaluates aoijs codes. Its limited to only Developers!!",
    code: `$title[Evaluated Command]
$addField[OUTPUT:;\`\`\`kt
$eval[$message]\`\`\`;yes]
$addField[INPUT:;\`\`\`kt
$message\`\`\`;yes]
$onlyForIDs[819586427968552971;682592010661527565;742945200082780160;746113176885657701;716761186812821604;**⛔ You are not my developer to perform this action!!**]`
});
