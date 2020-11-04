const Discord = require("discord.js");
const bot = new Discord.Client();
 
bot.on("ready", async () => {
    console.log("bot online");
    console.log(bot.user.tag);
    console.log(bot.user.id);
    bot.user.setActivity("a Kanye West music competition", { type: "COMPETING" });
});
 
bot.on("message", async message => {
    let prefix = "ok!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
    function send(toSend) {
        message.channel.send(toSend);
    }
 
 
    if(cmd === `${prefix}ok`) {
      send("ok");  
    }
 
    if(cmd === `${prefix}kanye` || message.content === "kanye"){
        let kanyePics = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg/1200px-Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg",
            "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314",
            "https://media1.popsugar-assets.com/files/thumbor/3V8qh1kIlOKjZCnfQq-2vhQbQnM/249x163:2149x2063/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/905/n/1922398/d9c250fc5e5435738e0e78.04534326_/i/Kanye-West.jpg",
            "https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg?auto=format%2Ccompress&fit=crop&h=360&w=660",
            "https://specials-images.forbesimg.com/imageserve/5dc5e2dd1e3e66000616382c/960x0.jpg?cropX1=0&cropX2=959&cropY1=0&cropY2=641",
            "https://i.insider.com/5db20c3a045a3166193aae32?width=884&format=jpeg",
            "https://claritychi.com/wp-content/uploads/2020/07/ye.jpg",
            "https://www.gannett-cdn.com/presto/2019/04/22/PPAS/006035a1-f7c2-4179-825a-d9a387f5cfba-LM-FF-12.JPG?width=660&height=629&fit=crop&format=pjpg&auto=webp",
            "https://www.monstersandcritics.com/wp-content/uploads/2018/09/Kanye-West-rant-1200x999.jpg",
            "https://www.irishtimes.com/polopoly_fs/1.3646336.1538248016!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
            "https://consequenceofsound.net/wp-content/uploads/2016/02/screen-shot-2016-02-17-at-5-09-37-pm.png?w=400&h=400&crop=1",
            "https://atlantablackstar.com/wp-content/uploads/2013/07/kanye-west1.jpg",
            "https://www.udiscovermusic.com/wp-content/uploads/2019/11/Kanye-West-2019-press-shot-Photo-courtesy-of-Def-Jam-1000.jpg"
          ];
          
          send(require("randomer.js").array(kanyePics));
    }
 
    if(cmd === `${prefix}8ball`){
        if(!args[0]) return send("ask a question");
        let response = [
            "yes",
            "balls",
            "no",
            "ask later!",
            "fuck off"
        ]
 
        send(require("randomer.js").array(response));
    }
 
    if(cmd === `${prefix}joebiden` || message.content === "joe biden"){
        let JoeBiden = [
            "https://image.cnbcfm.com/api/v1/image/106714481-1600884823518-abid.jpg?v=1600884846",
            "https://api.time.com/wp-content/uploads/2019/09/joe-biden-ukraine-fundraising.jpg",
            "https://ca-times.brightspotcdn.com/dims4/default/3b01353/2147483647/strip/true/crop/3514x2343+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F61%2F8a%2Fb98390324f64acad2e861f2bb5ac%2Fap20248663821883.jpg",
            "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795",
        ]
 
        send(require("randomer.js").array(JoeBiden));
    }
 
    if(cmd === `${prefix}status`){
        if (message.author.id !== "691428963544727613") return send("no");
    
        if (args[0] !== "online") {
            if (args[0] !== "idle") {
                if (args[0] !== "dnd") {
                    if(args[0] !== "invisible") {
                        return message.channel.send("not a status");
                    }
                }
            }
        }
 
        bot.user.setStatus(args[0]);
        send("finished");
    }
 
    if(cmd === `${prefix}help`){
        let helpEmbed = new Discord.MessageEmbed()
        .setColor("4287f5".replace("#", ""))
        .setTitle("help")
        .addField(`prefix: ${prefix}`, `\`ok\`\n\`kanye\`\n\`8ball\`\n\`joebiden\``)
 
        send(helpEmbed);
 
    }

    if(cmd === `${prefix}travis`){
        send("scott");
    }
});
 
bot.login(require(`./secret.json`).token);
