/*
    Analizando los salarios de Colombia
*/

//Obteniendo los salarios unicamente.
const obtenerSalarios = arreglo =>{
    return arreglo.map( ele =>{
        return ele.salary;
    })
};

//Ordenando los salarios
const ordenarSalarios = obtenerSalarios(SalariosColombia).sort((elementoA, elementoB) =>{
    return elementoA - elementoB;
});

/* 
    Calculando la Mediana 
*/
const esPar = arreglo =>{
    if(arreglo.length % 2 === 0){
        return true
    }else{
        return false
    }
}

const obtenerMedio = array => {
    return parseInt((array.length) / 2);
}

let $mediana = 0;

const mediana = array => {
    if(esPar(array)){
        let valorActual = array[obtenerMedio(array)];
        let valorAnterior = array[obtenerMedio(array) - 1];
        // console.log(`Valor actual: ${valorActual}, valorAnterior: ${valorAnterior}`);
        $mediana = ( valorActual + valorAnterior ) / 2;
    }else{
        $mediana = array[obtenerMedio(array)];
    }
    return $mediana;
}

console.log(`La mediana es: ${mediana(ordenarSalarios)}`);

/*
    Obteniendo el 10% superior de salarios en Colombia
*/

const salariosTop = ordenarSalarios.slice((ordenarSalarios.length * (100 - 10)) / 100, ordenarSalarios.length);
const salariosTopMediana = mediana(salariosTop);

console.log(`La mediana de los salarios top es: ${salariosTopMediana}`);