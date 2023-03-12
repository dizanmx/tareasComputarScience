function palindrome(){
    const palabra = prompt("teclea palabra")
    console.log(palabra)
    const separar = [...palabra].join('').toLocaleLowerCase().split('')
    //const prueba = palabra.split(' ').join('').toLowerCase().split('') probé frases y podría funcionar pero uso split y no spread operator
    const invertido = [...palabra].reverse()
    //const separar = palabra.split('')
    //const invertido = separar.slice().reverse()
    console.log (separar)
    console.log (invertido)
    console.log (prueba)

    var comparar = separar.length === invertido.length && separar.every((value, index) => value === invertido[index])
    alert (comparar)
}

function farenheitToCelsius(){
        var gradoString = prompt("ingresa grados a convertir")
        console.log(gradoString)
        var farenheit = parseInt(gradoString)
        console.log(farenheit)
        celsius = ((farenheit - 32)/1.800)
        console.log(celsius)
        alert(`El resultado es: °${celsius} celsius` )

}
