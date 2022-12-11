const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const taskRouter = require('./routes/task')
const notFound = require('./middleware/not-found')
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks', taskRouter)

app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log('Server is up on port' + ' ' + port.toString())
    })
  } catch (error) {
    console.log(error)
  }
}

start()
