/*
    Pendente
    Realizado - Resolve
    Recusada - Reject
    Estabelecida
*/



let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de fervura');
            
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira para ferver a agua');
            
            reject()
        }
    })
}

let chaleiraEstaNoFogao = false
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo o café');
