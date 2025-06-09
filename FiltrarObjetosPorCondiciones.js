function filtrarDisponibles(productos, categoria) {
  return productos.filter(({ categoria: ca, stock }) => 
    ca === categoria && stock > 0
  );
}

// Elementos de Prueba
const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 },
  { nombre: 'Pantalon', categoria: 'ropa', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);
