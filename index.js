//console.log("Helo, world!!!");

//O módulo express retorna uma função que instancia o express
const express = require("express")

//A função express cria uma instância de todo o framework express em app
const app = express()

const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/hora", function (req, resp) {
   let horaCerta = new Date()
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Hora certa ${horaCerta}</h1>
                </body>
            </html>
        `
    )
    
})

//http://localhost:3001/hora