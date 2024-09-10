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

// Exercicio 23
// Função calculadora básica
function userNumber() {
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));
  const operation = prompt("Escolha a operação desejada (+, -, /, *): ");

  function calcBasic(num1, num2, operation) {
    let res
    if (operation === "+") {
      res = num1 + num2;
      console.log(`${num1} + ${num2} = ${res}`);
    }
    else if (operation === "-") {
      res = num1 - num2;
      console.log(`${num1} - ${num2} = ${res}`);
    }
    else if (operation === "*") {
      res = num1 * num2;
      console.log(`${num1} * ${num2} = ${res}`);
    }
    else {
      res = num1 / num2;
      console.log(`${num1} / ${num2} = ${res}`);
    }
  }
  calcBasic(num1, num2, operation);
}
userNumber();

// Exercicio 24
// Número primo
const num = parseInt(prompt("Digite um número: "))
function primo(num) {
  if (num <= 1) {
    console.log("Não é primo");
    return;
  }
  if (num === 2) {
    console.log("É primo");
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("Não é primo");
      return;
    }
  }
  console.log("É primo");
}
primo(num);

// Exercicio 25
// Caracteres especiais
function caracterEspecial(texto) {
  texto = prompt("Digite uma string: ");
  const cctr = "{[@#$%&]}";
  let contador = 0;
  for (let char of texto) {
    if (cctr.includes(char)) {
      contador++;
    }
  }
  return contador;
}
const meuTexto = "Contar o número de caracteres";
const numeroDeCaracteres = caracterEspecial(meuTexto);
console.log(`Número de caracteres especiais: ${numeroDeCaracteres}`)

// Exercicio 26
// Notas
function mediaNota(p1 = 0, p2 = 0, p3 = 0, p4 = 0) {
  let media = (p1 + p2 + p3 + p4) / 4;
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}
console.log(mediaNota(5, 10, 8, 5));

//Exercicio 27
// Desafio 06/09
class Funcionario {
  #nome;
  #cargo;
  #atividades;

  constructor(nome, cargo) {
      this.#nome = nome;
      this.#cargo = cargo;
      this.#atividades = [];
  }

  getNome() {
      return this.#nome;
  }

  getCargo() {
      return this.#cargo;
  }

  adicionarAtividade(atividade) {
      this.#atividades.push(atividade);
  }

  listarAtividades() {
      return this.#atividades;
  }
}

class Engenheiro extends Funcionario {
  constructor(nome) {
      super(nome, 'Engenheiro');
  }

  realizarAtividade() {
      console.log(`${this.getNome()} está desenvolvendo software.`);
  }
}

class Designer extends Funcionario {
  constructor(nome) {
      super(nome, 'Designer');
  }

  realizarAtividade() {
      console.log(`${this.getNome()} está criando um design gráfico.`);
  }
}

function gerenciarFuncionarios() {
  const engenheiro1 = new Engenheiro('Normani');
  const designer1 = new Designer('Numanice');

  engenheiro1.adicionarAtividade('Desenvolvimento de API');
  designer1.adicionarAtividade('Criação de logotipo');

  console.log(`${engenheiro1.getNome()} - Atividades: ${engenheiro1.listarAtividades().join(', ')}`);
  console.log(`${designer1.getNome()} - Atividades: ${designer1.listarAtividades().join(', ')}`);

  engenheiro1.realizarAtividade();
  designer1.realizarAtividade();
}

gerenciarFuncionarios();
