const dotenv = require("dotenv")
dotenv.config({path:`${__dirname}/./../../.env.development`})

module.exports = {
  port: process.env.PORT,
  newChatEventMessage: process.env.NEW_CHAT_MESSAGE_EVENT,
  mongoUrl: process.env.MONGO_URL,
}