function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 2000); 
  });
}
// Uso de la función
cargarDatos().then((mensaje) => {
  console.log(mensaje);
});

