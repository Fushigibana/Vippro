module.exports.config = {
	name: "cony",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Jukie",
	description: "Tỉ lệ có Ny của bạn trong năm nay",
	commandCategory: "Giải trí", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

var _0xc626=["\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var _0x7562=[_0xc626[0],_0xc626[1],_0xc626[2],_0xc626[3],_0xc626[4]];var _0xd14a=[_0x7562[0],_0x7562[1],_0x7562[2],_0x7562[3],_0x7562[4]];var _0xa7f4=[_0xd14a[0],_0xd14a[1],_0xd14a[2],_0xd14a[3],_0xd14a[4]];var _0xbdad=[_0xa7f4[0],_0xa7f4[1],_0xa7f4[2],_0xa7f4[3],_0xa7f4[4]];var _0x3967=[_0xbdad[0],_0xbdad[1],_0xbdad[2],_0xbdad[3],_0xbdad[4]];var _0xae19=[_0x3967[0],_0x3967[1],_0x3967[2],_0x3967[3],_0x3967[4]];var _0xe35a=[_0xae19[0],_0xae19[1],_0xae19[2],_0xae19[3],_0xae19[4]];var _0x6aed=[_0xe35a[0],_0xe35a[1],_0xe35a[2],_0xe35a[3],_0xe35a[4]];var _0xf17c=[_0x6aed[0],_0x6aed[1],_0x6aed[2],_0x6aed[3],_0x6aed[4]];var tle=Math[_0xf17c[1]](Math[_0xf17c[0]]()* 101);var name=( await Users[_0xf17c[4]](event[_0xf17c[3]]))[_0xf17c[2]]
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.pinimg.com/originals/1a/26/e5/1a26e51bfd0aa963e0a48618175a9836.gif",
"https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
"https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
"https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif",
"https://i.pinimg.com/originals/f8/ba/e3/f8bae313dbee24d67d29770508e8cedd.gif",
"https://i.pinimg.com/originals/c4/3c/00/c43c005a8ad97b3a860a7464f3face97.gif",
"https://i.pinimg.com/originals/88/21/b5/8821b5beb925737cecbf67b1e573fa2e.gif",
"https://i.pinimg.com/originals/72/48/62/724862d06dfbb69beb0f21e4285d3575.gif",
"https://i.pinimg.com/originals/fc/a6/1b/fca61b6693560a29210dd33dcd203f57.gif",
"https://i.pinimg.com/originals/0f/2d/b8/0f2db86540afb15dd763a99b9a248baf.gif",
"https://i.pinimg.com/originals/c6/9a/e2/c69ae2e4f239da4584b548b6dfe226ba.gif",
"https://i.pinimg.com/originals/58/1f/c7/581fc7b69f373c3cc2be99f58a840cfd.gif",
"https://i.pinimg.com/originals/be/e0/96/bee096e95d49eeb2e8539633388ca013.gif",
"https://i.pinimg.com/originals/9e/91/fe/9e91feda4e8cf0c5ddad28ee53c07f50.gif",
"https://i.pinimg.com/originals/f1/39/81/f13981f2dc628bbe208747caabdbddf3.gif",
"https://i.pinimg.com/originals/42/3c/9a/423c9a21fc58034aae78b7ebc2b62673.gif",
"https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
"https://4.bp.blogspot.com/-yAExPAr7JeA/WDaBRVuJwxI/AAAAAAALb7I/Dbvda0KD5uECF3_SBjsvkl2_mqP9_BweQCLcB/s1600/AS000834_17.gif",
  ];
  var callback = () => api.sendMessage({body:`⚡Chúc mừng ${name}\n⚡Nếu bạn tỏ tình crush thì ${tle}% là bạn sẽ có người yêu :>`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
