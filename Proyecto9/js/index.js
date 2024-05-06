for (let x = 0; x < 5; x++) {
    if (x == 2)
        continue;
    console.log(x)
}

let a = 10;
a = a + 5;
a += 5;

let x = 10;
x **= 5;
console.log(x);

//Tipo de fecha 
const fecha = new Date();
console.log(fecha);

function myFunction(p1 = 3, p2 = 4) {
    return p1 * p2;
}

console.log(myFunction(5, 10));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);

otraFuncion = (a, b) => a * b

console.log(otraFuncion(5, 10));
console.log(otraFuncion);

// Función autoejecutable

(function () {
    console.log('Esta es una función anónima autoejecutable')
})();

(() => {
    console.log('Esta es otra función anónima autoejecutable')
})();

(() => console.log('Esta es otra función anónima autoejecutable'))();

let alumno = {
    nombre: 'Samantha',
    apellido: 'Pérez',
    matricula: 1234,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(alumno.nombreCompleto());