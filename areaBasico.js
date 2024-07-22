// Criando uma constante
const PI = 3.14159;
// Criando uma variável
var radius = 5;

function calculateArea(radius){
    // Definindo uma variavel como let
    let area;
    //Calculando area
    area = PI * radius * radius;
    return area;
}

var calculatedArea = calculateArea(radius);


console.log("O raio é: "+radius);
console.log("A área do circulo é: "+calculatedArea );

