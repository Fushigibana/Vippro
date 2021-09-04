module.exports.config = {
name: "duati",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DANH",
	description: "Đùa tí gì căng",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mình đùa tí")==0 || (event.body.indexOf("Đùa tí")==0)) {
		var msg = {
				body: "Đùa tí gì căng",
				attachment: fs.createReadStream(__dirname + `/noprefix/duati.jpeg`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}