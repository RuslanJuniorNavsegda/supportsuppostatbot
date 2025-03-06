const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `👋 Привет! Я SuppostatBot — твой помощник в работе с шаблоном технической поддержки.

📌 Что я умею:
- Открыть десктопную версию шаблона
- Запустить мобильную версию прямо в Telegram`,
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          "🖥 Десктопная версия",
          "https://ruslanjuniornavsegda.github.io/supportbot/"
        ),
      ],
      [
        Markup.button.webApp(
          "📱 Мобильная версия",
          "https://ruslanjuniornavsegda.github.io/supportbot/"
        ),
      ],
    ])
  );
});

bot.launch();

// Обработка завершения работы
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
