const pantallaElement = document.getElementById('pantalla') as HTMLInputElement;
function agregarValor(valor: string): void {
    pantallaElement.value += valor;
}

function borrarValor(): void {
    pantallaElement.value = ''
}

function calcular(): void {
    const resultado = eval(pantallaElement.value)
    pantallaElement.value = resultado
}