function identificarLetras(pal) {
    let letras = {};
    for (let letra of pal) {
      if (letras[letra]) {
        letras[letra]++;
      } else {
        letras[letra] = 1;
      }
    }
    return letras;
  }
  
  let resultado = identificarLetras('electrodomesticos');
  console.log(resultado);