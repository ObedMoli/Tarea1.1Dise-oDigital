function obtenerUsuario(id) {
  // Ejemplo de una base de datos con usuarios
  const usuarios = {
    1: { id: 1, nombre: 'Juan' },
    2: { id: 2, nombre: 'María' },
    3: { id: 3, nombre: 'Pedro' }
  };

  return new Promise((resolve) => {
    // Se hace un retraso de 5000 ms
    const delay = Math.floor(Math.random() * 1000) + 500;
    
    setTimeout(() => {
      resolve(usuarios[id]);
    }, delay);
  });
}

// se realizan las llamadas
Promise.all([
  obtenerUsuario(1),
  obtenerUsuario(2)
])
.then(([usuario1, usuario2]) => {
  console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
})
.catch(error => {
  console.error('Error al cargar usuarios:', error);
});