module.exports.config = {
name: "chuaphuho",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung. Edit Tyler Hoang",
	description: "chúa phù hộ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Không sao")==0 || (event.body.indexOf("có Chúa")==0)) {
		var msg = {
				body: "Không sao, không sao!",
				attachment: fs.createReadStream(__dirname + `/noprefix/chuaphuho.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}