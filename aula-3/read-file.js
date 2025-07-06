const { error } = require("node:console")
const fs = require("node:fs")

fs.readFile("arquivo.txt", "utf-8",(error,data)=>{
    if(error){
    console.log("ERROR ao ler o arquivo", error.message)
    return
    }

    console.log(data)
})

// try{
//     const data = fs.readFileSync("./arquivo.html","utf-8")
//     console.log(data)
// } catch(error){
//     console.log("Falha ao ler arquivo!", error.message)
// }