module.exports.config = {
name: "yeuban",
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
	if (event.body.indexOf("Iu")==0 || (event.body.indexOf("iu")==0)) {
		var msg = {
				body: "Tôi chân thành yêu em !. Nếu đây là lời nói dốt thì cậu nên biết tôi chỉ dối với người mà tôi yêu <3.",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeuban.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}