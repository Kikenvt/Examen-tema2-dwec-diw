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
const withraow = document.getElementById("withraow")
const transfer = document.getElementById("transfer")
const changePswd = document.getElementById("change-pswd")
const exit = document.getElementById("exit")
const resultTemplate = document.getElementById("result")

// Aqui añadiremos los listener para los eventos.
deposit.addEventListener("click", depositMoney)



// Creamos las funciones:

// Actualizar saldo

function refreshAccount(){
    resultTemplate.innerText = `${saldo}`
}



// 1-Depositar

function depositMoney(){
    const deposito = parseFloat(prompt('Por favor, indique la cantidad que desea retirar: '))
    if(isNaN(deposito) || deposito <= 0){
        alert('Importe no válido')
    }else{
        saldo -= deposito
        alert(`Se ha depositado una cantidad de ${deposito} €`)
        refreshAccount()
    }
}