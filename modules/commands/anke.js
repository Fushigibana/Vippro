module.exports.config = {
name: "anke",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung. Edit Tyler Hoang",
	description: "ADMIN",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ăn")==0 || (event.body.indexOf("măm")==0)) {
		var msg = {
				body: "Tao đi hốc đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/anke.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}