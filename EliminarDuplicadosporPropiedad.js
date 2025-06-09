function eliminarDuplicados(arreglo, propiedad) {
  const unicos = new Map();
  arreglo.forEach(item => {
    if (!unicos.has(item[propiedad])) {
      unicos.set(item[propiedad], item);
    }
  });
  return Array.from(unicos.values());
}
//Elementos de Pruebas
const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 3, nombre: 'C' },
  { id: 3, nombre: 'C' }
];
const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);
