
'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 8082
var morgan = require('morgan')
morgan('combined');

app.get('/', function (req, res) {
  console.log("immitating logs from console or winston");
   res.send('Hello World');
})
app.get('/api/hello', (req, res) => res.send('hello'))
app.get('/api/ping', (req, res) => res.send('pong'))
app.get('/api/status', (req, res) => res.send('ok'))
app.get('/api/longFetch',  function (req, res) {
    console.log("immitating logs from 1 downstreams");
    console.log("immitating logs from 2 downstreams");
   res.send('Hello World');
})

module.exports = app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
