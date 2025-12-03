// tipo de texto - string
"Isso é um texto";
"132";
"Usar aspas simples o JS entende como string";
`Usar a crase o JS entende como string`;
// tipo numérico - number
1234; //inteiro - int
12.34; //decimal - float

// tipo booleano - boolean
true; // verdadeiro
false; // falso
// tipo indefinido - undefined
undefined; // indefinido
// tipo nulo - null
null;

//O que é uma variável?
//Variável é um espaço na memória do computador para armazenar dados que podem ser alterados durante a execução do programa.
var nome = "Tiago"; // declarando uma variável do tipo string
let idade = 19; // declarando uma variável do tipo number
const altura = 1.7; // declarando uma constante do tipo number
//padrão de escrever variáveis em JS: camelCase
let a = 22;

console.log(nome);
console.log(idade);

nome = "Airlane";

console.log(nome);

let temCarro = true;
let estaAberto = false;

let profissao = undefined;
const meuNulo = null;
console.log(profissao);
console.log(meuNulo);

let meuComputador = "Notebook";
let cargo = "Programador Full-stack";
let nomeCachorro = "Valentina";

const anoAtual = 2024;
const cidade = "Fortaleza";
const namorada = "Airlane";

meuComputador = "Dell";
cargo = "Desenvolvedor Front-end";
nomeCachorro = "Luna";

console.log(meuComputador);
console.log(cargo);
console.log(nomeCachorro);
console.log(anoAtual);
console.log(cidade);
console.log(namorada);

//operações matemáticas
let numero1 = 20;
let numero2 = 10;

let soma = numero1 + numero2;

console.log(soma);
numero2 = 5;

let resultadoSubtracao = 30 - numero2;
console.log(resultadoSubtracao);

let result3 = 30 * 3;
console.log(result3);

let result4 = 50 / 10;
console.log(result4);

//mod - resto da divisao

let result5 = 10 % 3;
console.log(result5);

//verificando no console os tipos de dados - typeof
console.log(typeof nome); //string
console.log(typeof idade); //number
console.log(typeof temCarro); //boolean

let soma1 = 19 + 5;
let subtracao1 = 20 - 8;
let multiplicacao1 = 4 * 7;
let divisao1 = 40 / 5;

console.log(soma1);
console.log(subtracao1);
console.log(multiplicacao1);
console.log(divisao1);

console.log(typeof soma1);
console.log(typeof subtracao1);
console.log(typeof multiplicacao1);
console.log(typeof divisao1);

//templete string e concatenação
const nome1 = "Tiago";
const nome2 = "Rodrigues";
const nome3 = "Albuquerque";

const nomeCompleto = nome1 + " " + nome2 + " " + nome3;
console.log(nomeCompleto);

let meuCarro = "Fusca";
let frase = "Meu carro é um " + meuCarro;
let frase2 = `Meu carro é um ${meuCarro}`;

console.log(frase2);
console.log(frase);
