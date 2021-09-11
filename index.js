const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const route = require('./route')
app.use(cors())
app.use(express.json())
const connectDB = async () => {
  try {
      await mongoose.connect('mongodb+srv://root:root@dbnews.z990p.mongodb.net/dbnews?retryWrites=true&w=majority')
      console.log(`MongooseDB connect`)
  } catch (error) {
      console.log(error.message)
      process.exit(1)
  }
} 

connectDB()


app.use(route)
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env.PORT || port, () => console.log(`server run on ${port}`))