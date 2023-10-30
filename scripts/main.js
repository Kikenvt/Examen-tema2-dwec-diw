/*
 **Autor**: Enrique Fernández - Campoamor Fernández
 **GitHub**:
 */

window.addEventListener("load", sigIn)

// Creamos las variable de scope global

let saldo = 1000
let PIN_CORRECTO = "1234"
let intentosRestantes = 3

// Enlazamos las las partes del template con JS

const deposit = document.getElementById("deposit")
const withraw = document.getElementById("withraw")
const transfer = document.getElementById("transfer")
const changePin = document.getElementById("change-pswd")
const exit = document.getElementById("exit")
const resultTemplate = document.getElementById("result")
const historyTemplate = document.getElementById("history")

// Aqui añadiremos los listener para los eventos.
deposit.addEventListener("click", depositMoney)
withraw.addEventListener("click", withrawMoney)
transfer.addEventListener("click", transferMoney)
changePin.addEventListener("click", changePswd)
exit.addEventListener("click", () => {
  window.location.replace("/templates/goodbye.html")
})

// Creamos las funciones:

// Actualizar saldo

function refreshAccount() {
  resultTemplate.innerText = `${saldo}`
}

// 1-Depositar

function depositMoney() {
  const depositAmount = parseFloat(
    prompt("Por favor, indique la cantidad que desea depositar: ")
  )
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Importe no válido")
  } else {
    saldo += depositAmount
    alert(`Se ha depositado una cantidad de ${depositAmount} €`)
    const li = document.createElement("li")
    li.innerText = `INGRESADO ${depositAmount}`
    historyTemplate.appendChild(li)
    refreshAccount()
  }
}

// 2- Retirar

function withrawMoney() {
  const withrawAmount = parseFloat(
    prompt(`Por favor, indique la cantidad que desea retirar: `)
  )
  if (isNaN(withrawAmount) || withrawAmount <= 0 || withrawAmount > saldo) {
    alert("Saldo insuficiente o cántidad no válida")
  } else {
    saldo -= withrawAmount
    alert(`Se ha retirado al cantidad de ${withrawAmount} €`)
    refreshAccount()
  }
}

// 3- Transferir

function transferMoney() {
  const transferAmount = parseFloat(prompt(`Ingrese la cantidad a transferir`))
  
  if (isNaN(transferAmount) || transferAmount > saldo) {
    alert(`Importe no valido`)
    
  } else {
    const iban = prompt(`Ingrese el IBAN de destino`)
    if (!validateIban(iban)){
    alert("IBAN no valido")
    return
  }
    saldo -= transferAmount
    alert(`Se han transferido ${transferAmount} € a la cuenta ${iban}`)
    refreshAccount()
  
}
}

// Funcion para iniciar sesion

function sigIn() {
  let pin = prompt("Ingrese su pin: ")
  while (pin != PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--
    alert(`PIN incorecto. Intetos restantes ${intentosRestantes}`)
    pin = prompt("Ingrese su pin")
  }
    if (pin === PIN_CORRECTO) {
      alert("Bienvenido")
      refreshAccount()
    } else {
        alert("Cajero BLOQUEADO")
      window.location.replace("/templates/cajeroBloqueado.html")
    }
  
}

// Cambiar PIN

function changePswd() {
  const pinActual = prompt("Ingrese su pin actual")
  if (pinActual === PIN_CORRECTO) {
    PIN_CORRECTO = prompt("Ingrese su nuevo PIN")
    alert(`Su nuevo pin es ${PIN_CORRECTO}`)
  } else {
    alert("PIN INCORRECTO")
  }
}

// Expresion regular para el IBAN
function validateIban(iban) {
  let expresionRegular = /^(ES\d{22})$/
  return validateIban.test(iban)
}
