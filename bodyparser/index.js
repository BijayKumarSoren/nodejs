const express = require('express')
const app = express()
const hostname = '127.0.0.1'
const port = 4000
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "static", 'calc.html'));
})

//Use of Body Parser
app.post('/', (req, res) => {
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var result = num1 + num2
  res.send("The Addition is :" + result);
})

app.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})