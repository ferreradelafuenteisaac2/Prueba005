import { leerTeclado } from "./util/entradateclado";
console.log("Hola Mundo")

let main = async () => {
    const valor = await leerTeclado("Dime algo")
    console.log(`Me has dicho: ${valor}`)
}

main();