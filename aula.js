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

// For, While, Do While

// Começo
for (i = 10; i <= 20; i++) {
  console.log("Número " + i)
}
// Fim

// Começo
let e = 0;
while (e <= 5) {
  console.log("O número é " + e);
  e++
}
// Fim

// Começo
let a = 0;
do {
  console.log("The number is " + a)
  a++;
}
while (a <= 5);
// Fim

// Começo
let palavras = ["Figma", "Palavra", "JavaScript"]
for (let o of palavras) {
  console.log(o)
}
// Fim

// Começo
for (u = 1; u <= 10; u++) {
  let soma = u + 2;
  let resSoma = u+' + 2 = ' + soma;
  console.log(resSoma)
}
// Fim

// Começo
for (u = 1; u <= 10; u++) {
  let multi = u * 2;
  let resMulti = u+' * 2 = ' + multi;
  console.log(resMulti)
}
// Fim

// Começo
for (k = 10; k < 20; k++) {
  if(k == 15) {
    console.log("Cabo")
    break;
  }
  console.log(k)
}
// Fim

// Começo
let txt = "";
for (r = 0; r < 10; r++) {
  if(r === 3) {
    continue;
  }
  txt = "O número é " + r;
  console.log(txt)
}
// Fim

// Começo
for (p = 1; p <= 15; p++) {
  if(p % 2 == 0) {
    console.log("O número é par: ", p)
  } else {
    console.log("O número é impar: ", p)
  }
}
// Fim


// Array

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


// Functions

// Começo
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
// Fim

// Começo
function getSizes (alt, lar, com) {
  let area = alt * lar
  let volume = alt * lar * com
  let sizes = {area, volume, alt, lar, com}
  return sizes
}
console.log(getSizes(5, 6 ,7))
// Fim

// Começo
function somando (numero) {
  for (u = 1; u <= 10; u++) {
    let soma = u + numero;
    console.log(`${u} + ${numero} = ${soma}`)
  }
}
somando(3)
// Fim

// Começo
function multiplicando (numero) {
  for (u = 1; u <= 10; u++) {
    let multi = u * numero;
    console.log(`${u} x ${numero} = ${multi}`)
  }
}
multiplicando(3)
// Fim

// Começo
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
// Fim

// Começo
function calcularSoma(numeros) {
  let soma = 0;

  for (let n of numeros) {
    soma += n;
  }
  console.log(`A soma final é igual a: ${soma}`);
}
let numeros = [1, 2, 3, 4];
calcularSoma(numeros);
// Fim


// Encapsulamento

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


// Herança

// Começo
class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  getSaldo() {
    return this.#saldo;
  }

  set saldo(novoSaldo) {
    if (novoSaldo < 0) {
      console.log(`O saldo não pode ser negativo.`);
    } else {
      this.#saldo = novoSaldo;
    }
  }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
console.log(minhaConta.getSaldo());

minhaConta.saldo = 2000;
console.log(minhaConta.getSaldo());

minhaConta.saldo = -500;
console.log(minhaConta.getSaldo());
// Fim

// Começo
class Carro {
  #marca;
  #modelo;
  #ano;

  constructor(marca, modelo, ano) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }

  getAno() {
    return this.#ano;
  }

  set ano(ano) {
    if (ano < this.#ano) {
      console.log(`O carro ta ultrapassado.`)
    } else {
      this.#ano = ano;
    }
  }
}

const meuCarro = new Carro(`Jeep`, `Compass`, 2022);
console.log(meuCarro);
meuCarro.ano = 2028;
console.log(meuCarro.getAno())
// Fim

// Começo
class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  falar() {
    console.log(`${this.nome} faz um som.`);
  }

  dormir() {
    console.log(`${this.nome} está dormindo.`);
  }

  info() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade, `Cachorro`);
    this.raca = raca;
  }

  falar() {
    console.log(`${this.nome} late.`);
  }

  buscarBola() {
    console.log(`${this.nome} está buscando bola.`);
  }

  info() {
    super.info();
    console.log(`Raça: ${this.raca}`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade, `Gato`);
    this.raca = raca;
  }

  falar() {
    console.log(`${this.nome} mia.`);
  }

  cacarRato() {
    console.log(`${this.nome} está caçando rato.`);
  }

  info() {
    super.info();
    console.log(`Raça: ${this.raca}`);
  }
}

const meuCachorro = new Cachorro(`Meg`, 10, `Vira Lata`);
const meuGato = new Gato(`Zoe`, 4, `Vira Lata`)

meuCachorro.falar();
meuCachorro.dormir();
meuCachorro.buscarBola();
meuCachorro.info();

meuGato.falar();
meuGato.dormir();
meuGato.cacarRato();
meuGato.info();
// Fim