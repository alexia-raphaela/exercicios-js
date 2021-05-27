function teste1(num) {
    if(num > 7)
        console.log(num)
      
    console.log('Final') // Sempre será executado, pois ela está fora do if
    // Se eu quero ter mais de uma sentença de código então é preciso do bloco de chaves
}

teste1(6)
teste1(8)

function teste2 (num){
    if(num > 7); // Esse if é uma sentença de código vazia, por isso o 6 menos sendo menor ainda é impresso
    // Esse código if termina no ponto e virgula
    // cuidado com o ';', não usar com as estruturas de controle
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)