module.exports.config = {
	name: "thính",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Leo",
	description: "Thính đó",
	commandCategory: "Giải trí",
	usages: "gai",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`http://le31.glitch.me/poem`);
var thính = res.data.data
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}