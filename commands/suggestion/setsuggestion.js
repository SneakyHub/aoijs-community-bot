module.exports = ({
    name: "setschan",
    code: `$setServerVar[schan;$findServerChannel[$message]]
Successfully set <#$findServerChannel[$message]> as the suggestion channel for the server.
$onlyIf[$findServerChannel[$message;no]!=undefined;**⛔ That channel doesn't exists!!**]
$onlyIf[$message!=;**⛔ You must specify a channel for setting it as a suggestion channel!!**]
$onlyPerms[manageserver;**⛔ You dont have enough perms to do that!!**]`
});
