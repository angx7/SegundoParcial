let resultado = document.getElementById('resultado');

let asignarValor = (valor) => {
    resultado.value += valor;
}

let limpiar = () => {
    resultado.value = '';
}

let calcular = () => {
    resultado.value = eval(resultado.value);
}

let borrar = () => {
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

let logaritmo = () => {
    resultado.value = Math.log(resultado.value);
}

let tangente = () => {
    let radianes = resultado.value * (Math.PI / 180);
    resultado.value = Math.tan(radianes);
}

let seno = () => {
    let radianes = resultado.value * (Math.PI / 180);
    resultado.value = Math.sin(radianes);
}

let potencia = () => {
    resultado.value = Math.pow(resultado.value, 2);
}

let coseno = () => {
    let radianes = resultado.value * (Math.PI / 180);
    resultado.value = Math.cos(radianes);
}

let raiz = () => {
    resultado.value = Math.sqrt(resultado.value);
}