// Definindo limite estático
const limit = 20;

console.log('Exibindo os numero primos até 20:')
for(let i = 2; i <= limit; i++){
    if(primos(i)){
        console.log(i);
    }
    else{
        // nao faz nada
    }
}

// Criando a funçao para verificar se um numero é ou nao primo

function primos(num){

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false; //se um numero(num) é divisivel por qualquer numero(i) entre 2 e a raiz quadrada
        }                //deste numero (num), então (num) não é primo
    }

    return true;//se ele for primo, retorna true
}