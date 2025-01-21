const dataAtual = new Date();
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);

const dataFormatada = formatador.format(dataAtual)

console.log(dataFormatada);


