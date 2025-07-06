import { creatFile, showFile,deleteFile,pudateFile } from "./functions.mjs";

async function start(){
await creatFile("Conteudo inicial do arquivo\nCriado com o modulo fs do Node.js")
await showFile()
await pudateFile("Conteudo modificado")
//await deleteFile()
}

start()