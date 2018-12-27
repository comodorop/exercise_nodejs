var express = require('express')
var app = express()

app.get('/getUser', (req, resp)=>{
    var info = req.getBody()
    resp.send(info)
})

app.post('/saveUser', (req, resp)=>{
    resp.send('Hola mundo')
})


app.listen('', function (){
    console.log("Servidor ejecutando en el puerto 3500")
})