/*[] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número
 que você enviou*/

const repass = () => {
    numberOne = parseInt(document.getElementById("input-1").value)
    goUntil(numberOne)
}
function goUntil(numberOne) {
    let x = ""
    for (i = 1; i !== (numberOne + 1); i++) {
        if (numberOne >= 1000) {
            return document.getElementById("answer-1").innerHTML = "o número é muito grande"
        } else {
            x = `${x}${i}  `
            document.getElementById("answer-1").innerHTML = x
        }
    }
}

const timesTables = () => {
    numberTwo = parseInt(document.getElementById("input-2").value)
    calculate(numberTwo)
}

function calculate(numberTwo) {
    let x = ""
    if (numberTwo < 1 || numberTwo > 10) {
        document.getElementById("answer-2").innerHTML = `o número ${numberTwo} é maior que 10 ou menor que 1, diga um número entre 1 e 10, por favor.`
    } else {
        for (let i = 1; i <= 10; i++) {
            x = x + `<p>${i}*${numberTwo}=${i * numberTwo}</p>`
            document.getElementById("answer-2").innerHTML = x
        }
    }

}

function hour() {
    date = new Date()
    document.getElementById("answer-3").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function year() {
    date = new Date()
    document.getElementById("answer-4").innerHTML = `Estamos no ano de ${1900 + date.getYear()}`
}

function redirectBigger() {
    let firstNumber = parseInt(document.getElementById("input-5-1").value)
    let secondNumber = parseInt(document.getElementById("input-5-2").value)
    Bigger(firstNumber, secondNumber)
}

function Bigger(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        document.getElementById("answer-5").innerHTML = `O primeiro número, ${firstNumber}, é o maior.`
    } else {
        if (firstNumber === secondNumber) {
            document.getElementById("answer-5").innerHTML = `Os números são iguais.`
        } else {
            document.getElementById("answer-5").innerHTML = `O segundo número, ${secondNumber}, é o maior.`
        }
    }
}