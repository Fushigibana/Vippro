module.exports.config = {
name: "banlaso1",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "bạn là số 1",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nhất bạn")==0 || (event.body.indexOf("vâng vâng")==0)) {
		var msg = {
				body: "Bạn là số 1",
				attachment: fs.createReadStream(__dirname + `/noprefix/bạn là số 1.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}