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
          "🖥 Десктоп",
          "https://kapinoska.github.io/SuppostatBot/"
        ),
      ],
      [
        Markup.button.webApp(
          "📱 Мобильная",
          "https://kapinoska.github.io/SuppostatBot/"
        ),
      ],
    ])
  );
});

// Обработка ошибок
bot.catch((err) => {
  console.error("Ошибка бота:", err);
});

// Запуск
bot
  .launch()
  .then(() => console.log("Бот запущен!"))
  .catch((err) => {
    console.error("Ошибка запуска:", err);
    process.exit(1);
  });

// Корректное завершение
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
