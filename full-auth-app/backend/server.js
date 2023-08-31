import express from 'express';
const port = 4444

const app = express()

app.get('/', (req, res) => {
  res.send('Homepage')
})

app.listen(port, () => console.log(`Sever started on port ${port}`))