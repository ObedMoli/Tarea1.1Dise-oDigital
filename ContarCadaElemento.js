function contarPalabras(palabras) {
  return palabras.reduce((contador, palabra) => {
    contador[palabra] = (contador[palabra] || 0) + 1;
    return contador;
  }, {});
}

// ElementosDePrueba
const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias','holi','holi','michi','michi'];
const resultado = contarPalabras(palabras);
console.log(resultado);
