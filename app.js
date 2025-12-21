const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

let isHealthy = true

// Route normale
app.get('/health', (req, res) => {
  if (!isHealthy) return res.status(500).send('down')
  res.send('ok')
})

// Route "secrète" pour simuler la panne manuellement
app.post('/toggle-health', (req, res) => {
  isHealthy = !isHealthy
  res.send(`Server health is now: ${isHealthy}`)
})