// solução 1
function verificarPalidromo(string){
    if(!string) return "string inexistente";//caso não tenha um valor declarado irá falar que não existe.
   
    return string.split("").reverse().join("") === string;
}

console.log(verificarPalidromo(""));

// solução 2

function verificarPalidromo2(string){
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i])//irá verificar o tamanho da string e -1 pois começa do indice 0.
        {
            return false;
        }
    }
    return true;
}

console.log(verificarPalidromo2("abba"));