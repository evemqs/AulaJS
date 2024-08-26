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

// Aula 3

for (i = 10; i <= 20; i++) {
  console.log("Número " + i)
}

let e = 0;
while (e <= 5) {
  console.log("O número é " + e);
  e++
}

let a = 0;
do {
  console.log("The number is " + a)
  a++;
}
while (a <= 5);

let palavras = ["Figma", "Palavra", "JavaScript"]
for (let o of palavras) {
  console.log(o)
}

for (u = 1; u <= 10; u++) {
  let soma = u + 2;
  let resSoma = u+' + 2 = ' + soma;
  console.log(resSoma)
}

for (u = 1; u <= 10; u++) {
  let multi = u * 2;
  let resMulti = u+' * 2 = ' + multi;
  console.log(resMulti)
}

for (k = 10; k < 20; k++) {
  if(k == 15) {
    console.log("Cabo")
    break;
  }
  console.log(k)
}

let txt = "";
for (r = 0; r < 10; r++) {
  if(r === 3) {
    continue;
  }
  txt = "O número é " + r;
  console.log(txt)
}

for (p = 1; p <= 15; p++) {
  if(p % 2 == 0) {
    console.log("O número é par: ", p)
  } else {
    console.log("O número é impar: ", p)
  }
}

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
        console.log(`${e} + ${e} = ${number}`)
    }
}

// Exercicio 16
function tabuada(numero) {
  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
tabuada(7);

// Exercicio 17
function contarVogais(str) {
  str = str.toLowerCase();
  const vogais = "aeiou";
  let contador = 0;
  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}
const minhaString = "Contar o número de vogais";
const numeroDeVogais = contarVogais(minhaString);
console.log(`O número de vogais na string é: ${numeroDeVogais}`);

// Exercicio 18
function exibirImpares() {
  let numero = 1
  while (numero <= 20) {
    console.log(numero)
    numero += 2
  }
}
exibirImpares();

// Exercicio 19
function somarDigitos(numero) {
  const strNumero = numero.toString()
  let soma = 0
  for (let char of strNumero) {
    soma += parseInt(char, 10)
  }
  return soma;
}
const numero = 1234;
const resultado = somarDigitos(numero);
console.log(`A soma dos dígitos de ${numero} é: ${resultado}`);

// Exercicio 20
let objeto = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
}
console.log(objeto)

// Functions

function adivinharNumero (n) {
  let text = ``
  if (n == 10 || n == 15 || n == 20) {
    console.log(`Seu número foi: ${n}`)
  } else {
    text = `Seu número não foi sorteado`
  }
  return text
}
adivinharNumero(15)



function getSizes (alt, lar, com) {
  let area = alt * lar
  let volume = alt * lar * com
  let sizes = {area, volume, alt, lar, com}
  return sizes
}
console.log(getSizes(5, 6 ,7))


function somando (numero) {
  for (u = 1; u <= 10; u++) {
    let soma = u + numero;
    console.log(`${u} + ${numero} = ${soma}`)
  }
}
somando(3)


function multiplicando (numero) {
  for (u = 1; u <= 10; u++) {
    let multi = u * numero;
    console.log(`${u} x ${numero} = ${multi}`)
  }
}
multiplicando(3)


function pula(n) {
  let txt = "";
  for (r = 0; r <= 10; r++) {
    if(r === n) {
      continue;
    }
    txt = "O número é " + r;
    console.log(txt)
  }
}
pula(5)


function calcularSoma(numeros) {
  let soma = 0;

  for (let n of numeros) {
    soma += n;
  }
  console.log(`A soma final é igual a: ${soma}`);
}
let numeros = [1, 2, 3, 4];
calcularSoma(numeros);


// Aula 4

let pessoa = {
  nome: "Carlos",
  idade: 30,
  profissao: "Desenvolvedor",
  saudacao: function() {
    console.log("Olá, meu nome é: " + this.nome)
  }
}

let outraPessoa = {
  nome: "Ana",
  email: "anaoliveira@gmail.com",
  idade: 25,
  saudacao: pessoa.saudacao
}
outraPessoa.saudacao()

console.log(pessoa)
console.log(outraPessoa)

// Exercicio 21
let nomes = ["Numanice", "Laryssa", "Herbert", "Normani"]
nomes.push("Everlyn")
nomes.shift()
console.log("Tamanho do array:", nomes.length)
nomes = nomes.map(nome => nome.toUpperCase())
console.log("Nomes finais:", nomes)

// Exercicio 22
let carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020
}
carro.cor = 'Azul';
delete carro.ano;
console.log('Marca:', carro.marca);
console.log('Modelo:', carro.modelo);
