const { error } = require("node:console")
const fs = require("node:fs")

fs.unlink("./arquivo.txt",(error)=>{
    if(error){
        console.log("Erro ao excluir arquivo", error.message)
        return
    }

    console.log("Arquivo excluído com sucesso!")
})