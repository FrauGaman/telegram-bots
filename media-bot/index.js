const Telegraf = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('test', (ctx) => {
    //url
    // bot.telegram.sendPhoto(ctx.chat.id, 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228043_1280.jpg');

    //file path
    // bot.telegram.sendPhoto(ctx.chat.id, {source : 'res/london.jpg'});

    //file id
    bot.telegram.sendPhoto(ctx.chat.id, 'AgACAgIAAxkBAAMMXtOgLyrE3XshAhfuj8M6fCNzEgUAArSuMRvVMqFKVHDu40duSnimo-yRLgADAQADAgADeAADiJwCAAEZBA');

})

bot.launch();
