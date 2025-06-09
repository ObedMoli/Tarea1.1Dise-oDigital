function modificarPersona(persona, nuevoNombre) {
  return {
    persona,          
    nombre: nuevoNombre, 
    edad: persona.edad + 1 
  };
}

// Objeto original
const persona = { nombre: 'Luis', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log('Objeto original:', persona);
console.log('Nueva persona:', nuevaPersona);
