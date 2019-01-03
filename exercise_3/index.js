var express = require('express')
var app = express()
var midleware = require('./middleware/index')

app.use(midleware.validate)

app.get('/getUser', (req, resp)=>{
    var info = req.getBody()
    resp.send(info)
})




app.listen('', function (){
    console.log("Servidor ejecutando en el puerto 3500")
})