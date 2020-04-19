import express from 'express'
import Todo from './models/todo'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/todos', async (req, res) => {
  const todos = await Todo.find()
  res.status(200).json({ todos })
})

app.post('/todos', async (req, res) => {
  const { title, description } = req.body

  const payload = {
    title,
    description
  }

  const todo = await Todo.create(payload)
  res.status(201).json({ todo })
})

export default app
