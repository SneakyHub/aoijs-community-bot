module.exports = ({
name: "prefix",
code: `$setServerVar[prefix;$message[1]]
Successfully changed the prefix of $serverName to **\`$message[1]\`**.
$onlyIf[$message[1]!=;You need to specify something to be set as prefix!!]
$onlyPerms[manageserver;You must have **\`Manage Server\`** perms to set this server's prefix!!]`
});
