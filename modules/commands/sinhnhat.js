module.exports.config = {
	name: "sinhnhatad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược tới sinh nhật adminbot",
	commandCategory: "INFO ADMINBOT",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("March 18, 2022 07:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Đếm ngược tới sinh nhật của bạn Phạm Văn Diện」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}

