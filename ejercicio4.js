function esPar(numero) {
    if (numero % 2 === 0) {
        return `El número ${numero} es par.`;
    } else {
        return `El número ${numero} es impar.`;
    }
}

let numero = 525;
console.log(esPar(numero));