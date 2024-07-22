/* 
    function(a, b, ...args){
        ...
    }
*/

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabéns por ter chegado ao módulo de JavaScript avançado", "João ", "Pedro ", "Raphael")