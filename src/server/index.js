import express from 'express'
import cors from 'cors'
import test from './test.js'

const app = express()

app.use(cors())

app.use('/api', test)

app.get('/', (req, res) => {
  res.send('server.open')
})

const port = 5000
app.listen(port, () => {
  console.log(`${port}가 열렸어요`)
})
