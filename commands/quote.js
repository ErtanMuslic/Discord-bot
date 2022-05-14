const fetch =require("node-fetch");
module.exports = {
	name: 'quote',
	aliases: ['q'],
	description: 'Random quotefrom internet',
	cooldown: 5,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
		const author = args.join("%20");
		// const author = args[0]; 
		const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`);//.then(response => {
    		const result = await response.json();
// 	}).then((result) => {
//     	msg.reply(result.content + "; author: " + result.author);
// });
	},
 };