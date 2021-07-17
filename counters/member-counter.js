module.exports = async (client) =>{
    const guild = client.guilds.cache.get('853046672119824384');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('865148179971440640');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
 