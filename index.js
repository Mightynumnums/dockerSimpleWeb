const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('sup with it')
})

app.listen(8080, () => {
  console.log('Getting a party started on port 8080')
})