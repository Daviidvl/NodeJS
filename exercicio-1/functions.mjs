import { rejects } from "node:assert"
import { error } from "node:console"
import fs from "node:fs"
import { resolve } from "node:path"

export function creatFile(text) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", text, (error) => {
            if (error) {
                reject("Erro ao criar arquivo!", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
            if (error) {
                reject("Erro ao mostrar arquivo", error.message)
            } else {
                resolve(text)
            }
        })

    })
}

export function pudateFile(newText) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", newText, (error) => {
            if (error) {
                reject("Erro ao modificar arquivo!", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink("meuarquivo.txt", (error) => {
            if (error) {
                reject("Erro ao excluir arquivo")
            } else { (resolve) }
        })
    })
}
