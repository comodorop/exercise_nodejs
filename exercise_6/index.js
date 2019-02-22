var express = require('express')
var app = express()

/**
 * TODO: Obtener el valor de id por medio de params
 * Probar con: http://localhost:3000/users/yyy
 */
app.get('/users', (req, resp) => {
    let id
    resp.send('Devolver el recurso solicitado')
})

/**
 * TODO: Obtener el valor de code y state por medio de query
 * probar con: http://localhost:3000/callback?code=yyy&state=1
 */
app.get('/callback', (req, resp) => {
    let code
    let state
    resp.status(200).send({
        code: code,
        state: state
    })
})

app.listen('', function () {
    console.log("Servidor ejecutando en el puerto 3500")
})