function encontrarMayorMenor(a, b, c) {
    let may = Math.max(a, b, c);
    let men = Math.min(a, b, c);
    
    return `El número mayor es ${may} y el menor es ${men}`;
  }
  
  
  let resultado = encontrarMayorMenor(123, 321, 111);
  console.log(resultado)