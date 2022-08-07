module.exports = {
    name: "eval",
    aliases: ["e"],
    description: "Evaluate a code/function",
    usage: "eval <code/function>",
    category: "developer",
    code: `$eval[$message]
      $onlyIf[$message[1]!=;** **{newEmbed:{description: Add a message!}{color:ffffff}}]
      $onlyForIDs[830784829170778142;{newEmbed:{description:❌ You are not my Developer}{color:ff0000}}]
      $setVar[used;$math[$getVar[used]+1]]
      `
  };