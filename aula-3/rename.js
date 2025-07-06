const { error } = require("node:console")
const fs = require("node:fs")

fs.rename("./teste.txt", "newfile.txt", error=>{
    if(error){
        console.log("Erro ao mudar nome do arquivo")
        return
    }
    console.log("Nome do arquivo alterado com sucesso!")
})