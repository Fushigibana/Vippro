module.exports.config = {
name: "immom",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung. Edit Tyler Hoang",
	description: "im mồm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Im mẹ đi")==0 || (event.body.indexOf("hãm")==0)) {
		var msg = {
				body: "Mày im mẹ mồm lại đi!",
				attachment: fs.createReadStream(__dirname + `/noprefix/immom.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}