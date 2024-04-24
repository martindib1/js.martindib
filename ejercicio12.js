let personas = [
    { nombre: "Tomas", sexo: "masculino", edad: 25 },
    { nombre: "Azul", sexo: "femenino", edad: 27 },
    { nombre: "Martin", sexo: "masculino", edad: 19 },
    { nombre: "Nahir", sexo: "femenino", edad: 29 },
    { nombre: "Emma", sexo: "femenino", edad: 15 }
  ];
  
  // Función para calcular el promedio de edad
  function calcularPromedioEdad(personas) {
    let sumaEdades = 0;
    for (let persona of personas) {
      sumaEdades += persona.edad;
    }
    return sumaEdades / personas.length;
  }
  
  // Función para encontrar la persona más vieja de un determinado sexo
  function personaMasVieja(sexo) {
    let mayorEdad = -1;
    let nombrePersona = "";
    for (let persona of personas) {
      if (persona.sexo === sexo && persona.edad > mayorEdad) {
        mayorEdad = persona.edad;
        nombrePersona = persona.nombre;
      }
    }
    return nombrePersona;
  }
  
  // Función para encontrar la persona más joven de un determinado sexo
  function personaMasJoven(sexo) {
    let menorEdad = Number.MAX_SAFE_INTEGER;
    let nombrePersona = "";
    for (let persona of personas) {
      if (persona.sexo === sexo && persona.edad < menorEdad) {
        menorEdad = persona.edad;
        nombrePersona = persona.nombre;
      }
    }
    return nombrePersona;
  }
  
  // Filtrar personas por sexo
  let mujeres = personas.filter(persona => persona.sexo === "femenino");
  
  // Calcular promedio de edad de las mujeres
  let promedioEdadMujeres = calcularPromedioEdad(mujeres);
  
  // Mostrar resultados
  console.log("Promedio de edad:", calcularPromedioEdad(personas));
  console.log("Nombre de la mujer con mayor edad:", personaMasVieja("femenino"));
  console.log("Nombre del hombre con menor edad:", personaMasJoven("masculino"));
  console.log("Promedio de edad de las mujeres:", promedioEdadMujeres);
  // Cabe aclarar que este codeo no salio de mi cabeza.