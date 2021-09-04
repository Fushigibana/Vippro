module.exports.config = {
name: "damnhau",
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
	if (event.body.indexOf("Đấm")==0 || (event.body.indexOf("solo")==0)) {
		var msg = {
				body: "Choảng nhau đê đmm",
				attachment: fs.createReadStream(__dirname + `/noprefix/damnhau.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}