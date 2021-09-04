module.exports.config = {
	name: "video",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS mod video by Đăng",
	description: "Phát video thông qua link YouTube hoặc từ khoá tìm kiếm",
	commandCategory: "media",
	usages: "video [Text]",
	cooldowns: 10,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"fs-extra": "",
		"axios": ""
	},
	envConfig: {
		"YOUTUBE_API": "AIzaSyDEE1-zZSRVI8lTaQOVsIAQFgL-_BJKvhk"
	}	
};
 
module.exports.handleReply = async function({ api, event, handleReply }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
	let body = res.videoDetails.title;
	api.sendMessage(`Đang xử lý video !\n-----------\n${body}\n-----------\nXin Vui lòng Đợi !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
    });
	try {
		ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
		let body = res.videoDetails.title;
		ytdl(handleReply.link[event.body - 1])
			.pipe(createWriteStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`))
			.on("close", () => {
				if (statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID);
				else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID)
			})
			.on("error", (error) => api.sendMessage(`Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
	});
	}
	catch {
		api.sendMessage("Không thể xử lý yêu cầu của bạn!", event.threadID, event.messageID);
	}
	return api.unsendMessage(handleReply.messageID);
}
 
module.exports.run = async function({ api, event, args }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const YouTubeAPI = global.nodemodule["simple-youtube-api"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
 
	const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
	const keyapi = global.configModule[this.config.name].YOUTUBE_API
 
	if (args.length == 0 || !args) return api.sendMessage('Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
	const keywordSearch = args.join(" ");
	const videoPattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
	const urlValid = videoPattern.test(args[0]);
 
	if (urlValid) {
		try {
            var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
			(id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.mp4`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.mp4`).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${id}.mp4`), event.messageID);
					else return api.sendMessage({attachment: createReadStream(__dirname + `/cache/${id}.mp4`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.mp4`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(`Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
		}
		catch {
			api.sendMessage("Không thể xử lý yêu cầu của bạn!", event.threadID, event.messageID);
		}
 
	}
	else {
		try {
			var link = [], msg = "", num = 0, numb = 0;
			var imgthumnail = [];
			var results = await youtube.searchVideos(keywordSearch, 6);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
				var idd = value.id;
var _0x63e5=["\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x70\x61\x72\x74\x3D\x63\x6F\x6E\x74\x65\x6E\x74\x44\x65\x74\x61\x69\x6C\x73\x26\x69\x64\x3D","\x69\x64","\x26\x6B\x65\x79\x3D","","\x67\x65\x74"];let datab=( await axios[_0x63e5[5]](`${_0x63e5[1]}${value[_0x63e5[2]]}${_0x63e5[3]}${keyapi}${_0x63e5[4]}`))[_0x63e5[0]]
  let gettime = datab.items[0].contentDetails.duration;
  let time = (gettime.slice(2));
        /////////////////////
var _0xe656=["\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x70\x61\x72\x74\x3D\x73\x6E\x69\x70\x70\x65\x74\x26\x69\x64\x3D","\x69\x64","\x26\x6B\x65\x79\x3D","","\x67\x65\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x54\x69\x74\x6C\x65","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x2F\x63\x61\x63\x68\x65\x2F","\x2E\x70\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x76\x69\x2F","\x2F\x6D\x61\x78\x72\x65\x73\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72"];let datac=( await axios[_0xe656[5]](`${_0xe656[1]}${value[_0xe656[2]]}${_0xe656[3]}${keyapi}${_0xe656[4]}`))[_0xe656[0]];let channel=datac[_0xe656[8]][0][_0xe656[7]][_0xe656[6]];let folderthumnail=__dirname+ `${_0xe656[9]}${numb+= 1}${_0xe656[10]}`;let linkthumnail=`${_0xe656[11]}${value[_0xe656[2]]}${_0xe656[12]}`;let getthumnail=( await axios[_0xe656[5]](`${_0xe656[4]}${linkthumnail}${_0xe656[4]}`,{responseType:_0xe656[13]}))[_0xe656[0]]
 
 
 
 
var _0x1c92=["\x75\x74\x66\x2D\x38","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2F\x63\x61\x63\x68\x65\x2F","\x2E\x70\x6E\x67","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x70\x75\x73\x68"];fs[_0x1c92[2]](folderthumnail,Buffer[_0x1c92[1]](getthumnail,_0x1c92[0]));imgthumnail[_0x1c92[6]](fs[_0x1c92[5]](__dirname+ `${_0x1c92[3]}${numb}${_0x1c92[4]}`))
        /////=//////////////
				msg += (`${num+=1}. ${value.title}\nTime: ${time}\nKênh: ${channel}\n-----------------------\n`);
      }
 
      var body = `🎼 Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n👇👇👇👇👇\n${msg}\nHãy reply(phản hồi) chọn một trong những tìm kiếm trên`
 
return api.sendMessage({attachment: imgthumnail, body: body}, event.threadID,(error, info) => global.client.handleReply.push({ 
  name: this.config.name, 
  messageID: info.messageID, 
  author: event.senderID, 
  link }),
  event.messageID);
 
		}
		catch (error) {
      //api.sendMessage("Không thể xử lý request do dã phát sinh lỗi: " + error.message, event.threadID, event.messageID);
var _0x28fd=["\x66\x73\x2D\x65\x78\x74\x72\x61","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x61\x78\x69\x6F\x73","","\x73\x65\x61\x72\x63\x68\x56\x69\x64\x65\x6F\x73"];const fs=global[_0x28fd[1]][_0x28fd[0]];const axios=global[_0x28fd[1]][_0x28fd[2]];var link=[],msg=_0x28fd[3],num=0,numb=0;var imgthumnail=[];var results= await youtube[_0x28fd[4]](keywordSearch,6)
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
        var idd = value.id;
var _0x53f0=["\x2F\x63\x61\x63\x68\x65\x2F","\x2E\x70\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x76\x69\x2F","\x69\x64","\x2F\x68\x71\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x64\x61\x74\x61","","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74"];let folderthumnail=__dirname+ `${_0x53f0[0]}${numb+= 1}${_0x53f0[1]}`;let linkthumnail=`${_0x53f0[2]}${value[_0x53f0[3]]}${_0x53f0[4]}`;let getthumnail=( await axios[_0x53f0[8]](`${_0x53f0[6]}${linkthumnail}${_0x53f0[6]}`,{responseType:_0x53f0[7]}))[_0x53f0[5]]
 
 
 
        ////////////////////
var _0x129b=["\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x70\x61\x72\x74\x3D\x63\x6F\x6E\x74\x65\x6E\x74\x44\x65\x74\x61\x69\x6C\x73\x26\x69\x64\x3D","\x69\x64","\x26\x6B\x65\x79\x3D","","\x67\x65\x74","\x64\x75\x72\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x74\x65\x6E\x74\x44\x65\x74\x61\x69\x6C\x73","\x69\x74\x65\x6D\x73","\x73\x6C\x69\x63\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x70\x61\x72\x74\x3D\x73\x6E\x69\x70\x70\x65\x74\x26\x69\x64\x3D","\x63\x68\x61\x6E\x6E\x65\x6C\x54\x69\x74\x6C\x65","\x73\x6E\x69\x70\x70\x65\x74","\x75\x74\x66\x2D\x38","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2F\x63\x61\x63\x68\x65\x2F","\x2E\x70\x6E\x67","\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64\x53\x74\x72\x65\x61\x6D","\x70\x75\x73\x68"];let datab=( await axios[_0x129b[5]](`${_0x129b[1]}${value[_0x129b[2]]}${_0x129b[3]}${keyapi}${_0x129b[4]}`))[_0x129b[0]];let gettime=datab[_0x129b[8]][0][_0x129b[7]][_0x129b[6]];let time=(gettime[_0x129b[9]](2));let datac=( await axios[_0x129b[5]](`${_0x129b[10]}${value[_0x129b[2]]}${_0x129b[3]}${keyapi}${_0x129b[4]}`))[_0x129b[0]];let channel=datac[_0x129b[8]][0][_0x129b[12]][_0x129b[11]];fs[_0x129b[15]](folderthumnail,Buffer[_0x129b[14]](getthumnail,_0x129b[13]));imgthumnail[_0x129b[19]](fs[_0x129b[18]](__dirname+ `${_0x129b[16]}${numb}${_0x129b[17]}`))
        /////=//////////////
				msg += (`${num+=1}. ${value.title}\nTime: ${time}\nKênh: ${channel}\n-----------------------\n`);
      }
 
      var body = `🎼 Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n👇👇👇👇👇\n${msg}\nHãy reply(phản hồi) chọn một trong những tìm kiếm trên`
return api.sendMessage({attachment: imgthumnail, body: body}, event.threadID,(error, info) => global.client.handleReply.push({ 
  name: this.config.name, 
  messageID: info.messageID, 
  author: event.senderID, 
  link }),
  event.messageID);
		}
	}
  for(let ii = 1; ii < 7 ; ii++) {
  unlinkSync(__dirname + `/cache/${ii}.png`)}
 
 
 
 
}
