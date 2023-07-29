const express = require('express')
const path = require('path')
const app = express()
const hostname = '127.0.0.1'
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname, 'static'))); //Add a static folder 'static' 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "static", 'form.html'));
    // res.sendFile(path.join(__dirname,"../", "static", 'form.html')); //if index.js had been inside some another seperate folder

  })

app.post('/', (req, res) => {
    
})


app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })