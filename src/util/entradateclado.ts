import readline from 'readline'
let readlineI: readline.Interface

let leeLineaI = (prompt: string) => {
    readlineI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<string>( (resuelta: any, rechazada: any) => {
        readlineI.question(`${prompt}: `, (cadenaEntrada: string) => {
            resuelta (cadenaEntrada)
        })
    })
}
export let leerTeclado = async (prompt: string) => {
    let valor: string
    valor = await leeLineaI(prompt)
    readlineI.close()
    return valor
}