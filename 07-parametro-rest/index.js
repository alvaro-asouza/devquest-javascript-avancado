// function(a, b, ...args){

// }

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuester('Parabéns por ter chegado no modulo de javascript avançado, ', 'Álvaro', 'João', 'Pedro');