//introdução a objetos

const pessoa = {
  nome: "Tiago",
  idade: 20,
  temCarro: false,
  coresFavoritas: ["preto", "azul", "branco"],
  carro: {
    modelo: "Fusca",
    ano: 1980,
    itens: ["direcao elétrica", "cvt", "banco de couro"],
  },
};

const aluno = {
  nome: "Maria",
  matricula: 12345,
  turma: "Olímpica",
};

console.log(pessoa);
console.log(aluno.nome);
console.log(aluno.matricula);

console.log(aluno.nome === pessoa.nome); //false
console.log(pessoa.coresFavoritas[1]); //azul
console.log(pessoa.carro.modelo); //Fusca
console.log(pessoa.carro.itens[0]); //direcao elétrica
console.log(`Eu tenbo um carro com câmbio ` + pessoa.carro.itens[1]);

//substituindo valores em objetos

pessoa.carro.ano = 2025;
console.log(pessoa);

//adicionando "ar condicionado" no itens do carro

pessoa.carro.itens[3] = "ar condicionado";

console.log(pessoa);

//deletando propriedade do objeto
delete pessoa.temCarro;
console.log(pessoa);
