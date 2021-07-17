module.exports = {
    name: 'clear',
    aliases: ['c'],
    cooldown: 0,
    description: "this is clear message command",
    async execute(message,args, cmd, client) {
        if(!args[0]) return message.reply("Please enter the amount of messages u want to clear");
        if(isNaN(args[0])) return message.reply("Please enter a real numbber!");

        if(args[0] >100) return message.reply("You can not delete more than 100 message!");
        if(args[0] <1) return message.reply("You must atleast delete one number")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}