let randomNumer = undefined;
module.exports = {
	name: 'guess',
	aliases: ['g'],
	description: 'Ping!',
	cooldown: 2,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        const argument = args[0];
        if(argument == 'start'){
            randomNumer = Math.floor(Math.random() * 10);
            return msg.reply('The new game has started. Please guess the number');
        }
        if(randomNumer == undefined){
            return msg.reply("Please start the game by typing start");
        }

        if(randomNumer === parseInt(argument)){
            randomNumer = undefined;
            return msg.reply("Congrats, you won.");
        }

        else{
            return msg.reply("You stupid");
        }

        // if(randomNumer === undefined){
        //         randomNumer = Math.floor(Math.random() * 10);
        //         return msg.reply('The game has started. Please guess the number');
        //     }
        // else{
        //     }
	},
};