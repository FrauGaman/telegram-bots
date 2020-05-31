require('dotenv').config();
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use((ctx, next) => {
    ctx.state.apple = 5;
    console.log(ctx);
    ctx.reply('use middleware');
    next(ctx);
})

bot.start((ctx) => {
    ctx.reply(ctx.state.apple)
    // ctx.reply(`${ctx.from.first_name}, You have entered the start command`)
    // console.log('from', ctx.from)
    // console.log('chat', ctx.chat)
    // console.log('updateSubTypes', ctx.updateSubTypes)
})
// bot.help((ctx) => ctx.reply('You have entered the help command'))
// bot.settings((ctx) =>  ctx.reply('You have entered the settings command'))
//
// bot.command(["test", "Test"], (ctx) => {
//     ctx.reply('Hello world')
// })
//
// bot.hears(["cat", "what does the cat say?"], (ctx) => {
//      ctx.reply('meow')
// })

// bot.on('text', (ctx) => {
//     ctx.reply('This is a text message')
// })

// bot.on('sticker', (ctx) => {
//     ctx.reply('This is a sticker')
// })
//
// bot.mention('botfather', (ctx) => {
//     ctx.reply('mention method');
// })

bot.launch()