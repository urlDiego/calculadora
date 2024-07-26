"use strict";
const pantallaElement = document.getElementById('pantalla');
function agregarValor(valor) {
    pantallaElement.value += valor;
}
function borrarValor() {
    pantallaElement.value = '';
}
function calcular() {
    const resultado = eval(pantallaElement.value);
    pantallaElement.value = resultado;
}
