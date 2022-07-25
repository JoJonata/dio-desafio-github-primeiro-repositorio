function substituiPares(array) {
    if (!array) return -1; // verificação caso seja nulo, retorna -1
    if(!array.length) return -1;// verificação caso seja 0 o valor do array, retorna -1

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("você já é zero!")
        } else if (array[i] % 2 === 0){   //verifica quais valores são pares e escreve a mensagem dentro do if
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let valores = [1, 2, 4, 8, 33, 23, 90];
console.log(substituiPares(valores));