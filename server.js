// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

/***********************************   Telegram *******************************************************/


bot.start(async ctx => {// evento de start
     const from = ctx.update.message.from
    await ctx.reply('Ola ')
    await ctx.reply('ID ' + ctx.chat.id + ` para o usuario ' ${from.first_name}`)
  //console.log("Session " + session)
  
});

bot.command('/ajuda', ctx => ctx.reply('/ajuda: vou mostrar as opções'
    + '\n/op1: Descubra seu id'
   ))



bot.hears('/op1', async ctx => {
  const from = ctx.update.message.from
    console.log(from)
    console.log(ctx.chat.id === ctx.update.message.from.id)
    console.log(ctx.chat.id)
    console.log(ctx.update.message.from.id)  
  
  
    await ctx.reply('ID ' + ctx.chat.id + ` para o usuario ' ${from.first_name}`)
})


bot.startPolling();

/***********************************  FIM Telegram *******************************************************/

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
