/*[] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número
 que você enviou*/

const repass = () => {
    numberOne = parseInt(document.getElementById("input-1").value)
    goUntil(numberOne)
    document.getElementById("input-1").value = ""
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

document.getElementById("input-2").oninput = function () {
    if (document.getElementById("input-2").value !== "") {
        if (this.value < 1) {
            this.value = 0
        }
        if (this.value > 10) {
            this.value = 10
        }
    }
}

const timesTables = () => {
    numberTwo = Number(document.getElementById("input-2").value)
    calculate(numberTwo)
}

function calculate(numberTwo) {
    let x = ""
    document.getElementById("input-2").value = ""
    if (numberTwo < 1 || numberTwo > 10) {
        document.getElementById("answer-2").innerHTML = `o número ${numberTwo} é maior que 10 ou menor que 1, diga um número entre 1 e 10, por favor.`
    } else {
        for (let i = 1; i <= 10; i++) {
            x = x + `<p>${i}*${numberTwo}=${(i * numberTwo).toFixed(2)}</p>`
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
    document.getElementById("input-5-1").value = ""
    document.getElementById("input-5-2").value = ""
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

    if (document.getElementById("input-6-1").value === "" || document.getElementById("input-6-2").value === "" || document.getElementById("input-6-3").value === "" || document.getElementById("input-6-4").value === "" || document.getElementById("input-6-5").value === "" || document.getElementById("input-6-6").value === "" || document.getElementById("input-6-7").value === "" || document.getElementById("input-6-8").value === "" || document.getElementById("input-6-9").value === "" || document.getElementById("input-6-10").value === "") {
        return document.getElementById("answer-6").innerHTML = "você se esqueceu de algum valor"
    }

    let wageOne = parseInt(document.getElementById("input-6-1").value)
    let wageTwo = parseInt(document.getElementById("input-6-2").value)
    let wageThree = parseInt(document.getElementById("input-6-3").value)
    let wageFour = parseInt(document.getElementById("input-6-4").value)
    let wageFive = parseInt(document.getElementById("input-6-5").value)

    document.getElementById("input-6-1").value = ""
    document.getElementById("input-6-2").value = ""
    document.getElementById("input-6-3").value = ""
    document.getElementById("input-6-4").value = ""
    document.getElementById("input-6-5").value = ""

    let x = ""

    let firstChildnumber = parseInt(document.getElementById("input-6-6").value)
    let secondChildnumber = parseInt(document.getElementById("input-6-7").value)
    let thirdChildnumber = parseInt(document.getElementById("input-6-8").value)
    let fourthChildnumber = parseInt(document.getElementById("input-6-9").value)
    let fifthChildnumber = parseInt(document.getElementById("input-6-10").value)

    document.getElementById("input-6-6").value = ""
    document.getElementById("input-6-7").value = ""
    document.getElementById("input-6-8").value = ""
    document.getElementById("input-6-9").value = ""
    document.getElementById("input-6-10").value = ""

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

    if (wageOne === wageTwo || wageOne === wageThree || wageOne === wageFour || wageOne === wageFive || wageTwo === wageOne || wageTwo === wageThree || wageTwo === wageFour || wageTwo === wageFive || wageThree === wageTwo || wageThree === wageOne || wageThree === wageFour || wageThree === wageFive || wageFour === wageTwo || wageFour === wageThree || wageFour === wageOne || wageFour === wageFive || wageFive === wageTwo || wageFive === wageThree || wageFive === wageFour || wageFive === wageOne) {
        return document.getElementById("answer-6").innerHTML = `Você colocou algum salário igual a outro`
    } else if (x === "") {
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


function redirectInvestment() {

    document.getElementById("input-7-1").value = ""
    document.getElementById("input-7-2").value = ""
    document.getElementById("input-7-3").value = ""

    let initialValue = parseInt(document.getElementById("input-7-1").value)
    let currentValue = parseInt(document.getElementById("input-7-2").value)
    let monthTime = parseInt(document.getElementById("input-7-3").value)

    Investment(initialValue, currentValue, monthTime)
}

function Investment(initialValue, currentValue, monthTime) {
    let result = (currentValue - initialValue) / (initialValue * monthTime)
    document.getElementById("answer-7").innerHTML = `${result * 100}%`
}


function redirectdiscount() {
    document.getElementById("input-8-1").value = ""
    document.getElementById("input-8-2").value = ""
    document.getElementById("input-8-3").value = ""
    document.getElementById("input-8-4").value = ""

    let clientNmae = document.getElementById("input-8-1").value
    let buyValue = parseInt(document.getElementById("input-8-2").value)
    let firtBuy = document.getElementById("input-8-3").value
    let cashOrNo = document.getElementById("input-8-4").value
    discount(clientNmae, buyValue, firtBuy, cashOrNo)
}
function discount(clientNmae, buyValue, firtBuy, cashOrNo) {
    if (firtBuy === "s" && cashOrNo === "s" && buyValue >= 1000) {
        var discount = 0.3
    }
    if (firtBuy === "s" && cashOrNo === "s" && buyValue < 1000 & buyValue >= 500) {
        var discount = 0.25
    }
    if (firtBuy === "s" && cashOrNo === "s" && buyValue < 500) {
        var discount = 0.2
    }
    if (firtBuy === "s" && cashOrNo === "n" && buyValue >= 1000) {
        var discount = 0.2
    }
    if (firtBuy === "s" && cashOrNo === "n" && buyValue < 1000 & buyValue >= 500) {
        var discount = 0.15
    }
    if (firtBuy === "s" && cashOrNo === "n" && buyValue < 500) {
        var discount = 0.10
    }
    if (firtBuy === "n" && cashOrNo === "s" && buyValue >= 1000) {
        var discount = 0.2
    }
    if (firtBuy === "n" && cashOrNo === "s" && buyValue < 1000 & buyValue >= 500) {
        var discount = 0.15
    }
    if (firtBuy === "n" && cashOrNo === "s" && buyValue < 500) {
        var discount = 0.1
    }
    if (firtBuy === "n" && cashOrNo === "n" && buyValue >= 1000) {
        var discount = 0.2
    }
    if (firtBuy === "n" && cashOrNo === "n" && buyValue < 1000 & buyValue >= 500) {
        var discount = 0.05
    }
    if (firtBuy === "n" && cashOrNo === "n" && buyValue < 500) {
        var discount = 0
    }
    if (discount !== 0) {
        document.getElementById("answer-8").innerHTML = `Nós agradecemos pela sua compra, ${clientNmae}! O valor sem desconto seria ${buyValue}, mas o valor baixou para ${buyValue * (1 - discount)}, pois você adiquiriu um desconto de ${discount * 100}%`
    } else {
        document.getElementById("answer-8").innerHTML = `Nós agradecemos pela sua compra, ${clientNmae}! O valor da sua compra é ${buyValue}, mas temos um cupom de ${Math.ceil(Math.random() * 20)}% para sua próxima compra!`
    }
}

