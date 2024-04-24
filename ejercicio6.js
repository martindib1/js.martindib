function enumerarElementos(N1, N2) {
    let men = Math.min(N1, N2);
    let may = Math.max(N1, N2);
    let elementosIntermedios = [];
    
    for (let i = men + 1; i < may; i++) {
      elementosIntermedios.push(i);
    }
    
    return elementosIntermedios;
  }
  
  let N1 = 100;
  let N2 = 120;
  let elementosSeparadores = enumerarElementos(N1, N2);
  console.log(elementosSeparadores);