/*Obtener número mayor de una matriz 4 *4*/
function obtenerNumeroMayor(matriz) {
    let numeroMayor = matriz[0][0];

        for (let i = 0; i < matriz.length; i++) {
            for ( let j = 0; j < matriz[i].length; j++) {
                if(matriz[i][j] > numeroMayor) {
                    numeroMayor = matriz[i][j];
                }
            }
        }
        return numeroMayor;
    }
    
    const matriz = [
        [32, 4, 8, 7],
        [5, 7, 67, 9],
        [3, 10, 8, 2],
        [7, 9, 1, 27],
    ];
    
    const resultado = obtenerNumeroMayor(matriz)
    console.log(resultado)
    
        
/*Matriz Cuadradra*/
function matrizCuadrada(matriz) {
    const filas = matriz.length;
    for (let i = 0; i < filas; i++) {
        if (matriz[i].length !== filas) {
            return false
        }
    }
    return true
}

const matriz1 = [
    [3, 6, 1],
    [7, 9, 3],
    [1, 5],
]

const matriz2 = [
    [1, 4, 8],
    [4, 6, 3],
    [9, 5, 2],
]

console.log(matrizCuadrada(matriz1))
console.log(matrizCuadrada(matriz2))

/*Obtener fila larga*/
function obtenerFilaLarga(matriz) {
    let filaLarga = matriz[0]

    for (let i = 0; i < matriz.length; i++) {
        if(matriz[i].length > filaLarga.length) {
            filaLarga =  matriz[i]
        }      
    }
    return filaLarga
}

const matr1 = [[9, 2, 5, 1], [8, 5, 3], [3, 7]]
const filaLarga1 = obtenerFilaLarga(matr1)
console.log(filaLarga1)

const matr2 = [[3, 8, 1], [7, 4], [8, 4, 2, 6], [5]]
const filaLarga2 = obtenerFilaLarga(matr2)
console.log(filaLarga2)


/*Obtener elementos de una matriz*/
function obtenerCantidad(item, items) {
    let cantidad = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if (item === items[i][j]) { 
                cantidad = cantidad + 1;
            }
        }
    }
    return cantidad;
    }

    const elemMatriz = [
        [5,3,2,4],
        [1,6,4,9],
        [2,4,1,0]
    ];

console.log(obtenerCantidad(4, elemMatriz))


/*Suma de arreglos con resultado nuevo arreglo*/
function sumaArray (array1,array2){
    let sumaArray = [];

    for(let i = 0; i < array1.length; i++){
        sumaArray.push(array1[i]+array2[i])
    }
    return sumaArray
}

let array1 = [3,4,5,6]
let array2 = [1,2,7,8]

console.log(sumaArray(array1,array2))



/*Función para crear una cuenta regresiva*/
function crearCuentaRegresiva(numeroInicial) {
    let cuentaRegresiva = [];
    for (let i = 0; i <= numeroInicial; i++){
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva.reverse();
}
console.log(crearCuentaRegresiva(5))


/*Función filtro de números mayores o iguales a 6 en un array*/
const numerosMayores = [3,6,8,2,9,1,12]
const mayoresOiguales6 = numerosMayores.filter(num => num >=6)

console.log(mayoresOiguales6)




