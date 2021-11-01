/*[] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número
 que você enviou*/

const repass = () => {
    numberOne = parseInt(document.getElementById("input-1").value)
    goUntil(numberOne)
}
function goUntil(numberOne) {
    let x = ""
    for (i = 1; i !== (numberOne + 1); i++) {
        x = `${x}${i}  `
        document.getElementById("answer-1").innerHTML = x


    }
}