import '@babel/polyfill'
import mongoose from 'mongoose'
import app from './app'

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('mongodb is connected!!')
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
})
