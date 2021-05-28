module.exports = ({
    name: "suggest-reset",
    usage: "suggest-reset",
    description: "Resets the suggestion system.",
    category: "Moderation",
    code: `$setServerVar[sc;0]
$resetUserVar[smsg]
$setServerVar[schan;]
Successfully reset the suggestion system!!
$onlyPerms[manageserver;**⛔ You don't have enough perms to do that!!**]`
});
