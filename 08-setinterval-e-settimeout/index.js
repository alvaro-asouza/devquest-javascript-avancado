// setTimeout(() => {
//     alert('Olá, testando o setTimeout.')
// }, 2000)

// setTimeout(() => {
//     console.log('console dentro do setTimeout');
// }, 4000)

// setInterval(() => {
//     console.log('Executando a cada 2 segundos');
// }, 4000)

// console.log('console depois do setTimeout');

const idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos');
}, 2000)

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);

