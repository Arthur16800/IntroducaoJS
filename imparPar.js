const num1 = 1
const num2 = 2
const num3 = 3

function parImpar(num){
    if(num%2 === 0){
        return "par"
    }
    else{
        return "impar"
    }
}

console.log("num1 é:",parImpar(num1))
console.log("num2 é:",parImpar(num2))
console.log("num3 é:",parImpar(num3))