module.exports.config = {
name: "chuahe",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung. Edit Tyler Hoang",
	description: "chúa hề",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chúa hề")==0 || (event.body.indexOf("tấu hài")==0)) {
		var msg = {
				body: "Bạn nói thật là nực cười :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/chuahe.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}