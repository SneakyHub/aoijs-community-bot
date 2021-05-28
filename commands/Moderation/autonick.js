module.exports = ({
    name: "$alwaysExecute",
    description: "Changes anyone's name who has special characters on their name!!",
    code: `$changeNickname[$authorID;SneakyHub_Hoisted_$randomString[5]]
$onlyIf[$findSpecialChars[$nickname[$authorID]]!=;]
$suppressErrors`
});
