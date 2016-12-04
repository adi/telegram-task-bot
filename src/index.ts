import config from './config';
import * as TelegramBot from 'node-telegram-bot-api';

let bot: any;
if (config.telegram.webhook) {
  bot = new TelegramBot(config.telegram.token, { webHook: { port: config.telegram.port, host: config.telegram.host } });
  bot.setWebHook(config.telegram.externalUrl + '/' + config.telegram.token);
} else {
  bot = new TelegramBot(config.telegram.token, { polling: true });
}
bot.onText(/\/echo (.+)/, function (msg: any, match: any) {
  const fromId = msg.from.id;
  const resp = match[1];
  bot.sendMessage(fromId, resp);
});

