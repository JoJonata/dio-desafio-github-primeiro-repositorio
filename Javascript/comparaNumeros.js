function comparaNumeros(num1, num2){
    const saoIguais = num1 === num2; // comapração boleana
    const soma = num1 + num2;
    
    return saoIguais ? "São iguais" : "não são iguais";
    
    /*if(saoIguais){
    return "São iguais";
    }
    return "Não são iguais";
    comparação com if, mas utilizando o if ternario o codigo fica menor*/
    }
    console.log(saoIguais);
