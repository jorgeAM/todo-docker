import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/todos', async (req, res) => {
  res.status(200).json({ message: 'hola desde docker!!!' })
})

app.post('/todos', async (req, res) => {})

export default app
