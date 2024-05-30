// Siempre hambriento 
function siempreHambriento(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") 
            console.log("delicioso")  
     else
        console.log("Tengo hambre")
    } 
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

// Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = []; //definiendo la variable

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) { // Si el valor del elemento actual en el array es mayor que el valor del cutoff, se agrega a filteredArr usando .push
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);  

// Mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; //suma de todos los elementos en el arreglo
    }
    var promedio = sum / arr.length; // Calcular el promedio dividiendo la suma de los elementos entre la cantidad de elementos

    
    var count = 0; 
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > promedio) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 


// Arreglo invertido 1
function reverse(arr) {
    return arr.reverse();
} 

 // Arreglo invertido 2
function reverse(arr) {
    var invertidos = []; // acá se van a almacenar los valores nuevos

    for (var i = arr.length - 1; i >= 0; i--) { // se inicia el bucle de forma decreciente
        invertidos.push(arr[i]);
    }
    return invertidos;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 


//Arreglo de Fibonacci
function fibonacciArray(n) { //declaramos n como parametro
    var fibArr = [0, 1]; // primeros valores del arreglo
    for (var i = 2; i < n; i++) {
        var siguienteValor = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(siguienteValor);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
