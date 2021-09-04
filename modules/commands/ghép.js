module.exports.config = {
  name: "ghép",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "quên, fix by Jukie~",
  description: "Ghép đôi",
  commandCategory: "Giải trí", 
  usages: "ghép", 
  cooldowns: 10,
  dependencies: [] 
};
module.exports.run = async function({ api, event, Users, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money = 0, money >0) api.sendMessage("⚡️Nghèo quá nên tôi không biết ghép cho ai nhé!")
        else {
var _0xe51b=["\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61","\x74\x68\x72\x65\x61\x64\x49\x44","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x6C\x65\x6E\x67\x74\x68","\x70\x75\x73\x68"];var tle=Math[_0xe51b[1]](Math[_0xe51b[0]]()* 101);var namee=( await Users[_0xe51b[4]](event[_0xe51b[3]]))[_0xe51b[2]];let loz= await api[_0xe51b[6]](event[_0xe51b[5]]);var emoji=loz[_0xe51b[7]];var id=emoji[Math[_0xe51b[1]](Math[_0xe51b[0]]()* emoji[_0xe51b[8]])];var name=( await Users[_0xe51b[4]](id))[_0xe51b[2]];var arraytag=[];arraytag[_0xe51b[9]]({id:event[_0xe51b[3]],tag:namee});arraytag[_0xe51b[9]]({id:id,tag:name})

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `⚡️Ghép đôi thành công!\n⚡️Tỉ lệ hợp đôi: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}
