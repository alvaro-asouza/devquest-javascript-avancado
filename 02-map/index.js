let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 }
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.lenght; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas);

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " + pessoa.idade + " anos ")

console.log(nomeDasPessoas);


