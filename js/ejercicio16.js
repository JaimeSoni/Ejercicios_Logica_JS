let palabra = prompt("Ingresa una palabra de prueba")

let invertir = palabra.split("").reverse().join("")

if (palabra===invertir) {
    console.log("La palabra es palindroma")
} else {
    console.log("La palabra no es palindroma")
}