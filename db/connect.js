const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log('CONNECTED TO DB...')
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
