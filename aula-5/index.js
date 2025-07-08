const os = require("node:os")

const platform = os.platform()
console.log("Plataforma do SO:", platform)

const arquitetura = os.arch()
console.log("A arquitetura do SO:",arquitetura)

const cpus = os.cpus()
console.log("O nucleos do SO:", cpus.length)

const maquina = os.machine()
console.log("Machine:",maquina)

const memoria = os.totalmem()
console.log("memoria: ", memoria / 1024/ 1024/ 1024,"GB")

const memoriaLivre = os.freemem()
console.log("Memoria livre", memoriaLivre / 1024 / 1024/ 1024, "GB")