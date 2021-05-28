module.exports = ({
    name: "suggest-reset",
    code: `$setServerVar[sc;0]
$resetUserVar[smsg]
$setServerVar[schan;]
Successfully reset the suggestion system!!
$onlyPerms[manageserver;**⛔ You don't have enough perms to do that!!**]`
});
