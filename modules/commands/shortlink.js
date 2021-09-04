module.exports.config = {
	name: "shortlink",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jukie~",
	description: "rút gọn liên kết url của trang web",
	commandCategory: "Tiện ích",
	usages: "[link]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let url = args.join(" ");
const res = await axios.get(`https://is.gd/create.php?format=simple&url=${url}`);
var link = res.data;
return api.sendMessage(`${link} `, event.threadID, event.messageID)
}