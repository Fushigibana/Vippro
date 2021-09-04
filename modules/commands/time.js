module.exports.config = {
 name: "time",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Jukie~",
 description: "xem giờ Việt Nam",
 commandCategory: "Tiện ích",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
var hour = res.data.data.time.hour;
var minute = res.data.data.time.minute;
var second = res.data.data.time.second;


return api.sendMessage(`⚡️Chúc bạn một ngày tốt lành:\n⚡️Bây giờ là: ${hour}:${minute}:${second} `, event.threadID, event.messageID)
}