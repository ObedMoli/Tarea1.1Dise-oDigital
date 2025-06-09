function agruparPorPropiedad(arr, propiedad) {
  return arr.reduce((acumulador, objetoActual) => {
    // Desestructuración para obtener la propiedad 
    const { [propiedad]: valorPropiedad } = objetoActual;
    if (!acumulador[valorPropiedad]) {
      acumulador[valorPropiedad] = [];
    }
    acumulador[valorPropiedad].push(objetoActual);
    return acumulador;
  }, {});
}
// Datos de prueba
const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];
const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);
console.log('Probando')