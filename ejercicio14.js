function encontrarDivisores(minimo, maximo, divisor) {
    let divisores = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  
  let listaDivisores = encontrarDivisores(100, 120, 3);
  console.log(`Los divisores del numero ingresado son: ${listaDivisores}`);