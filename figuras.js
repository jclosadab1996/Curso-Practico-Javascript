//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " Cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " Cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " Cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCiruculo(radio){
    return radio * 2;
}
//const diametroCirculo = radioCirculo*2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const pi = Math.PI;
//console.log("Pi es: " + pi);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCiruculo(radio);
    return diametro * pi;
}
//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return (radio * radio) * pi;
}
//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();