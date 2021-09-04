module.exports.config = {
name: "luathoaqua",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DANH",
	description: "Luật hoa quả",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật hoa quả")==0 {
		var msg = {
				body: "Luật hoa quả over sai",
				attachment: fs.createReadStream(__dirname + `/noprefix/Luật Hoa Quả.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}