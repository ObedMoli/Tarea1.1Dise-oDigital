function combinarListasSinRepetir(arreglo1, arreglo2) {
  const combinado = arreglo1.concat(arreglo2);
  return combinado.filter((item, index) => combinado.indexOf(item) === index);
}
// Elementos de prueba
const lista1 = ['manzana', 'pera', 'banana','guineo','chiramelo','pera','pera'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía','guineo','rambutan'];
const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);
