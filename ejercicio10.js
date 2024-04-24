const nums = [10, 11, 12, 13, 14];
const sumaPares = nums.reduce((acumulador, valorActual) => {
    if (valorActual % 2 === 0) {
        return acumulador + valorActual;
    } else {
        return acumulador;
    }
}, 0);
console.log(`La suma de los números pares es de ${sumaPares}`);