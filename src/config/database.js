const mongoose = require('mongoose')
const {mongoUrl} = require("./index")

module.exports = async () => {
  await mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database connected:', mongoUrl)
    })
    .catch((err) => {
      console.error('connection error:', err)
    })
}