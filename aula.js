let numero1 = 10
let numero2 = 5

// Soma
let soma = numero1 + numero2
console.log("Soma: ", soma)

// Subtração
let subt = numero1 - numero2
console.log("Subtração: ", subt)

// Multiplicação
let mult = numero1 * numero2
console.log("Multiplicação: ", mult)

// Divisão
let divi = numero1 / numero2
console.log("Divisão: ", divi)

// Exponencial
console.log("Exponencial de 10: ", Math.pow(numero1, 2))
console.log("Exponencial de 5: ", numero2**2)

// Resto
let resto = numero1 % numero2
console.log("Resto da divisão de 10 por 5: ", resto)

// Incremento
let inc = 0
inc ++
console.log("Incremento de 0 + 1: ", inc)

// Decremento
let dec = 1
dec --
console.log("Decremento de 0 - 1: ", dec)


// Exercicio 1
function aritmetica (number1, number2, number3) {
  let atm = number1 + number2 + number3 / 3
  console.log("Aritmética de 5, 7 e 10: ", atm)
}
aritmetica(5, 7, 10)

// Exercicio 2
function retangulo (b, h) {
  let area = b * h
  console.log("A área do retângulo é: ", area)
}
retangulo(10, 25)

// Exercicio 3
function incrementoDecremento (number) {
  let incr = number++
  let decr = number--
  console.log("O incremento do número 10 é: ", incr, "e o decremento é: ", decr)
}
incrementoDecremento(10)

// Exercicio 4
function restoDivisao (n1, n2) {
  let result = n1 % n2
  console.log("Resto da divisão de 8 por 16: ", result)
}
restoDivisao(8, 16)

// Exercicio 5
function temperatura (f) {
  let c = (f - 32) * (5/9)
  console.log("A temperatura em Celsius para Fahrenheit fica: ", c)
}
temperatura(32)

// Exercicio 6
function dobroMetade (number) {
  let dobro = number * 2
  let metade = number / 2
  console.log("Dobro de 27: ", dobro, "Metade de 27: ", metade)
}
dobroMetade(27)

// Exercicio 7
function elevado (number1, number2) {
  let exp = number1**number2
  console.log("52 elevado a 94 é igual a: ", exp)
}
elevado(9, 3)

// Exercicio 8
function negativoOuPositivo (number) {
  if (number >= 1) {
    console.log('Esse número é positivo.')
  } else if (number < 0) {
    console.log('Esse número é negativo.')
  } else {
    console.log('O número é zero.')
  }
}
negativoOuPositivo(5)

// Exercicio 9
function parOuImpar (number) {
  if (number %2 == 0) {
    console.log('Esse número é par.')
  }
  else {
    console.log('Esse número é ímpar.')
  }
}
parOuImpar(24)

// Exercicio 10
function classIdade (number) {
  if (number <= 12) {
    console.log('É uma criança.')
  }
  else if (number <= 17) {
    console.log('É um adolescente.')
  }
  else if (number <= 64) {
    console.log('É um adulto.')
  }
  else {
    console.log('É um idoso.')
  }
}
classIdade(65)

// Exercicio 11
function classNota (number) {
  if (number <= 20) {
    console.log('Nota F')
  }
  else if (number <= 40) {
    console.log('Nota D')
  }
  else if (number <= 60) {
    console.log('Nota C')
  }
  else if (number <= 80) {
    console.log('Nota B')
  }
  else {
    console.log('Nota A')
  }
}
classNota(85)

// Exercicio 12
function diaDaSemana (number) {
  if (number == 1) {
    console.log('Segunda')
  }
  else if (number == 2) {
    console.log('Terça')
  }
  else if (number == 3) {
    console.log('Quarta')
  }
  else if (number == 4) {
    console.log('Quinta')
  }
  else if (number == 5) {
    console.log('Sexta')
  }
  else if (number == 6) {
    console.log('Sábado')
  }
  else {
    console.log('Domingo')
  }
}
diaDaSemana(5)

// Exercicio 13
function bonusVendedor (faturamento) {
  let bonus = 0;
  if (faturamento < 1000) {
    bonus = faturamento * 0;
    console.log('Bônus igual a: ', bonus)
  }
  else if (faturamento >= 1000 && faturamento <= 5000) {
    bonus = faturamento * 0.05
    console.log('Bônus igual a: ', bonus)
  }
  else {
    bonus = faturamento * 0.1
    console.log('Bônus igual a: ', bonus)
  }
}
bonusVendedor(2000)

// Arrays
let frutas = ["Maçã", "Banana", "Laranja"]
console.log(frutas[0])

// Push
frutas.push("Manga")
console.log(frutas)

// Pop
frutas.pop()
console.log(frutas)

// Shift
frutas.shift()
console.log(frutas)

// Unshift
frutas.unshift("Morango")
console.log(frutas)

// Length
console.log(frutas.length)

// Exercicio 14
for(i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("Feliz ano novo!")

// Exercicio 15
for(e = 1; e <= 20; e++) {
    if (e %2 == 0) {
        let number = e + e
        console.log(e, "+", e, "=", number)
    }
}
