module.exports.config = {
name: "gianghoa",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung. Edit Tyler Hoang",
	description: "giảng hòa",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anh bạn à")==0 || (event.body.indexOf("hòa đê")==0)) {
		var msg = {
				body: "Chúng ta có thể giảng hòa được không!???",
				attachment: fs.createReadStream(__dirname + `/noprefix/gianghoa.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}