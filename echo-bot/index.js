const Telegraf = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
/echo - say "You said echo"
/echo "some text" - echo a message
`
bot.use((ctx, next) => {
    console.log(ctx.chat);
    if (ctx.updateSubTypes[0] === "text") {
        // console.log(`${ctx.from.username} said ${ctx.message.text}`);
        bot.telegram.sendMessage( -421524215, `${ctx.from.username} said ${ctx.message.text}`)
    } else {
        // console.log(`${ctx.from.username} said ${ctx.updateSubTypes[0]}`);
        bot.telegram.sendMessage( -421524215, `${ctx.from.username} said ${ctx.updateSubTypes[0]}`)

    }
    next();
})

bot.start((ctx) => {
    ctx.reply('Hi! I am Echo Bot');
    ctx.reply(helpMessage);
});

bot.help((ctx) => {
    ctx.reply(helpMessage);
})

bot.command('echo', (ctx)  => {
    let input = ctx.message.text;
    let inputArray = input.split(' ');
    let message;

    if (inputArray.length === 1) {
        message = 'You said echo'
    } else {
        inputArray.shift();
        message = inputArray.join(' ');
    }

    ctx.reply(message);
})

bot.launch();
