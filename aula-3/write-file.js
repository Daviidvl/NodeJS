
const fs = require("node:fs") //trabalhar com modulo é sempre bom por o "node:"

const content = "Conteudo do novo arquivo assincrono"

fs.writeFile("./arquivo.txt", content,"utf-8", (error) =>{
    if(error){
    console.log("erro ao escrever arquivo", error.message)
    return
    }
    
    console.log("arquivo ok")
})
