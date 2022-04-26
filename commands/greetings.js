module.exports = {
	name: 'greetings',
	aliases: ['hello'],
	description: 'The bot will greet you',
	cooldown: 5,
	guildOnly: true,
	args:false,
	usage:false,
	execute(msg, args) {
        var randomnumber = Math.floor(Math.random() * 5);

        switch(randomnumber){
            case 1:
                return msg.channel.send(`Greetings fellow human called ${msg.author}`);
            case 2:
                return msg.channel.send(`Hello old friend,i hope youre still called ${msg.author.username}`);
            case 3:
                return msg.channel.send(`You again ${msg.author},get lost`);
            case 4:
                return msg.channel.send(`Greetings fellow human called ${msg.author}`);
            case 5:
                return msg.channel.send(`Greetings fellow human called ${msg.author}`);
            
        }

        msg.channel.send(`Greetings ${msg.author.name}. Nice to meet you`);
    },
};