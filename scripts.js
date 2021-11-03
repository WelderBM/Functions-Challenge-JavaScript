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

function arithmeticAverage() {
    let wageOne = parseInt(document.getElementById("input-6-1").value)
    let wageTwo = parseInt(document.getElementById("input-6-2").value)
    let wageThree = parseInt(document.getElementById("input-6-3").value)
    let wageFour = parseInt(document.getElementById("input-6-4").value)
    let wageFive = parseInt(document.getElementById("input-6-5").value)

    let x = ""

    let firstChildnumber = 0
    let secondChildnumber = 0
    let thirdChildnumber = 0
    let fourthChildnumber = 0
    let fifthChildnumber = 0
    console.log(firstChildnumber, secondChildnumber, thirdChildnumber, fourthChildnumber, fifthChildnumber);
    if (parseInt((document.getElementById("input-6-6").value)) == NaN) {
        firstChildnumber = 0
    } else{ firstChildnumber = parseInt(document.getElementById("input-6-6").value)}
    if (parseInt((document.getElementById("input-6-7").value)) != "NaN") {
        secondChildnumber = parseInt(document.getElementById("input-6-7").value)
    } else{secondChildnumber = 0}
    if (parseInt((document.getElementById("input-6-8").value)) != "NaN") {
        thirdChildnumber = parseInt(document.getElementById("input-6-8").value)
    } else{thirdChildnumber = 0}
    if (parseInt((document.getElementById("input-6-9").value)) != "NaN") {
        fourthChildnumber = parseInt(document.getElementById("input-6-9").value)
    }else{fourthChildnumber = 0}
    if (parseInt((document.getElementById("input-6-10").value)) != "NaN") {
        fifthChildnumber = parseInt(document.getElementById("input-6-10").value)
    } else {fifthChildnumber = 0}
    console.log(firstChildnumber, secondChildnumber, thirdChildnumber, fourthChildnumber, fifthChildnumber);

    firstChildnumber = parseInt(document.getElementById("input-6-6").value)
    firstChildnumber = parseInt(document.getElementById("input-6-6").value)
    firstChildnumber = parseInt(document.getElementById("input-6-6").value)
    firstChildnumber = parseInt(document.getElementById("input-6-6").value)
    if ((wageOne > wageTwo & wageOne > wageThree && wageOne > wageFour && wageOne > wageFive) || (wageTwo > wageOne && wageTwo > wageThree && wageTwo > wageFour && wageTwo > wageFive) || (wageThree > wageTwo && wageThree > wageOne && wageThree > wageFour && wageThree > wageFive) || (wageFour > wageTwo && wageFour > wageThree && wageFour > wageOne && wageFour > wageFive) || (wageFive > wageTwo && wageFive > wageThree && wageFive > wageFour && wageFive > wageOne)) {
        if (wageOne > wageTwo && wageOne > wageThree && wageOne > wageFour && wageOne > wageFive) {
            x = `o salário de valor(${wageOne}) é o maior`
            document.getElementById("answer-6").innerHTML = `o salário de valor(${wageOne}) é o maior`
        }
        if (wageTwo > wageOne && wageTwo > wageThree && wageTwo > wageFour && wageTwo > wageFive) {
            x = `o salário de valor(${wageTwo}) é o maior`
        }
        if (wageThree > wageTwo && wageThree > wageOne && wageThree > wageFour && wageThree > wageFive) {
            x = `o salário de valor(${wageThree}) é o maior`
        }
        if (wageFour > wageTwo && wageFour > wageThree && wageFour > wageOne && wageFour > wageFive) {
            x = `o salário de valor(${wageFour}) é o maior`
        }
        if (wageFive > wageTwo && wageFive > wageThree && wageFive > wageFour && wageFive > wageOne) {
            x = `o salário de valor(${wageFive}) é o maior`
        }
    }
    if (wageOne === wageTwo || wageOne === wageThree || wageOne === wageFour || wageOne === wageFive || wageTwo === wageOne || wageTwo === wageThree || wageTwo === wageFour || wageTwo === wageFive || wageThree === wageTwo || wageThree === wageOne || wageThree === wageFour || wageThree === wageFive || wageFour === wageTwo || wageFour === wageThree || wageFour === wageOne || wageFour === wageFive || wageFive === wageTwo || wageFive === wageThree || wageFive === wageFour || wageFive === wageOne) {
        return document.getElementById("answer-6").innerHTML = `Você colocou algum salário igual a outro`
    } else if (x === "") {
        return document.getElementById("answer-6").innerHTML = `você esqueceu de algum valor`
    }
    if (firstChildnumber === 0 || secondChildnumber === 0 || thirdChildnumber === 0 || fourthChildnumber === 0 || fifthChildnumber === 0) {
        return document.getElementById("answer-6").innerHTML = `você esqueceu de algum valor`
    }

    x = x + `<p>A média entre os salários é: ${(wageOne + wageTwo + wageThree + wageFour + wageFive) / 5}</p>`

    let y = ((firstChildnumber + secondChildnumber + thirdChildnumber + fourthChildnumber + fifthChildnumber) / 5)

    if ((y === Math.ceil(y))) {
        x = x + `<p>A média entre o número de filhos é ${Math.floor((firstChildnumber + secondChildnumber + thirdChildnumber + fourthChildnumber + fifthChildnumber) / 5)}</p>`
    } else if ((y + 0.5 > Math.ceil(y))) {
        x = x + `<p>A média entre o número de filhos é um pouco menor que ${Math.ceil((firstChildnumber + secondChildnumber + thirdChildnumber + fourthChildnumber + fifthChildnumber) / 5)}</p>`
    } else {
        x = x + `<p>A média entre o número de filhos é um pouco maior que ${Math.floor((firstChildnumber + secondChildnumber + thirdChildnumber + fourthChildnumber + fifthChildnumber) / 5)}</p>`
    }

    document.getElementById("answer-6").innerHTML = x
}