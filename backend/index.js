var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.get('/hello', hello)

function hello(req, res) {
    res.send('Hello World!')
}

//////////////////////////////////////////////////////
// Get the port from the environment, i.e., Heroku sets it
var port = process.env.PORT || 3000

var server = app.listen(port, function() {
     console.log('Server listening at http://%s:%s',
               server.address().address,
               server.address().port)
})