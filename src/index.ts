import config from './config';
import * as TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(config.telegram.token, { polling: true });
bot.onText(/\/echo (.+)/, function (msg: any, match: any) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});
