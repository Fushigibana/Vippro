module.exports.config = {
	name: "chucmung",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS. Mod by TylerHoang",
	description: "Cảnh báo người dùng!",
	commandCategory: "system",
	usages: "[lý do/all]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "listwarning.json");

	if (!existsSync(path)) writeFileSync(path, JSON.stringify({}), 'utf-8');
	return;
}

module.exports.run = async function ({ event, api, args, permssion, Users }) {
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, mentions, senderID } = event;
    const mention = Object.keys(mentions);

    const path = resolve(__dirname, "cache", "listwarning.json");
    const dataFile = readFileSync(path, "utf-8");
    var warningData = JSON.parse(dataFile);

    switch (args[0]) {
        case "all": {
            if (permssion != 2) return api.sendMessage(`Không có gì xin đừng "chúc mừng" !`, threadID, messageID);
            var listUser = "";

            for (const IDUser in warningData) {
                const name = global.data.userName.get(IDUser) || await Users.getNameUser(IDUser);
                listUser += `- ${name}: còn ${warningData[IDUser].warningLeft} lần dùng bot (Thằng Tú nói thì đừng tin nó. Tao bot vẫn dùng được :>)\n`;
            }
            if (listUser.length == 0) listUser = "Chưa có ai để chúc mừng :))";
            return api.sendMessage(listUser, threadID, messageID);
        }
        case "reset": {
            writeFileSync(path, JSON.stringify({}), 'utf-8');
            return api.sendMessage("Đã rút lại toàn bộ lời chúc mừng :))!", threadID, messageID);
        }
        default: {
            if (permssion != 2) {
                const data = warningData[args[0] || mention[0] || senderID];
                console.log(data);
                const name = global.data.userName.get(args[0] || mention[0] || senderID) || await Users.getNameUser(args[0] || mention[0] || senderID);
                if (!data) return api.sendMessage(`Hiện tại ${name} không có bất cứ lời "chúc mừng" nào :))!`, threadID, messageID);
                else {
                    var reason = "";
                    for (const n of data.warningReason) reason += `- ${n}\n`;
                    return api.sendMessage(`Hiện tại bạn ${name} đẹp trai/xinh gái còn lại ${data.warningLeft} lần dùng bot. (Đùa thôi ><):\n\n${reason}`, threadID, messageID);
                }
            }
            else {
                try {
                    if (event.type != "message_reply") return api.sendMessage("Rep tin nhắn để chúc mừng nào.", threadID, messageID);
                    if (event.messageReply.senderID == api.getCurrentUserID()) return api.sendMessage('Oh, thanks :))', threadID, messageID);
                    if (args.length == 0) return api.sendMessage("Hãy có lý do chúc mừng!", threadID, messageID);
                    var data = warningData[event.messageReply.senderID] || { "warningLeft": 3, "warningReason": [], "banned": false };
                    if (data.banned) return api.sendMessage("Không có gì nhưng vui vẻ nha bạn <3", threadID, messageID);
                    const name = global.data.userName.get(event.messageReply.senderID) || await Users.getNameUser(event.messageReply.senderID);
                    data.warningLeft -= 1;
                    data.warningReason.push(args.join(" "));
                    if (data.warningLeft == 0) data.banned = true;
                    warningData[event.messageReply.senderID] = data;
                    writeFileSync(path, JSON.stringify(warningData, null, 4), "utf-8");
                    if (data.banned) {
                        const data = (await Users.getData(event.messageReply.senderID)).data || {};
                        data.banned = 1;
                        await Users.setData(event.messageReply.senderID, { data });
                        global.data.userBanned.set(parseInt(event.messageReply.senderID), 1);
                    }
                    return api.sendMessage(`Chúc mừng ${name}\n👉Lý do: ${args.join(" ")}, ${(data.banned) ? `\nChúc bạn tất cả, 1 ngày tốt lành nhé!!\n📌Thắc mắc gì vê bot hãy liên hệ Admin` : `\nSố lần bạn làm rơi điện thoại khi đang ib còn ${data.warningLeft} lần ><!\nNhắn tin vui vẻ nha!`}`, threadID, messageID);
                } catch (e) { return console.log(e) };
            }
        }
    }
}