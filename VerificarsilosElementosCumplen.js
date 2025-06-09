function verificarMayoresDeEdad(edad) {
  for (let i = 0; i < edades.length; i++) {
    if (edad[i] < 18) {
      return false;
    }
  }
  return true;
}
// Elementos de prueba
const edad = [19, 25, 32, 17];
const resultado = verificarMayoresDeEdad(edad);
console.log(resultado); 