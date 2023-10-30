/*
**Autor**: Enrique Fernández - Campoamor Fernández
**GitHub**: 
*/

// Creamos las variable de scope global

let saldo = 1000
const PIN_CORRECTO = "1234"
let intentosRestantes = 3

// Enlazamos las las partes del template con JS

const deposit = document.getElementById("deposit")
const withraw = document.getElementById("withraw")
const transfer = document.getElementById("transfer")
const changePswd = document.getElementById("change-pswd")
const exit = document.getElementById("exit")
const resultTemplate = document.getElementById("result")

// Aqui añadiremos los listener para los eventos.
deposit.addEventListener("click", depositMoney)
withraw.addEventListener("click", withrawMoney)


// Creamos las funciones:

// Actualizar saldo

function refreshAccount(){
    resultTemplate.innerText = `${saldo}`
}



// 1-Depositar

function depositMoney(){
    const depositAmount = parseFloat(prompt('Por favor, indique la cantidad que desea depositar: '))
    if(isNaN(depositAmount) || depositAmount <= 0){
        alert('Importe no válido')
    }else{
        saldo += depositAmount
        alert(`Se ha depositado una cantidad de ${depositAmount} €`)
        refreshAccount()
    }
}

// 2- Retirar

function withrawMoney(){
    const withrawAmount = parseFloat(prompt(`Por favor, indique la cantidad que desea retirar: `))
    if(isNaN(withrawAmount) || withrawAmount <= 0 || withrawAmount > saldo){
        alert('Saldo insuficiente o cántidad no válida')
    }else{
        saldo -= withrawAmount
        alert(`Se ha retirado al cantidad de ${withrawAmount} €`)
        refreshAccount()
    }
}