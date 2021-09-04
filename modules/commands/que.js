module.exports.config = {
name: "quê",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DANH",
	description: "Quê",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Quê")==0 {
		var msg = {
				body: "Bạn quê vl luôn ý",
				attachment: fs.createReadStream(__dirname + `/noprefix/quê.jpg`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}