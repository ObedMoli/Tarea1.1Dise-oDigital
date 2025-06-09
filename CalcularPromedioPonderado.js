function promedioPonderado(notas) {
  const sumaPesos = notas.reduce((sum, nota) => sum + nota.peso, 0);
  if (Math.abs(sumaPesos - 1) > 0.1) { 
    console.warn('Los pesos no suman 1 (100%).');
  }
  // Calculamos el promedio ponderado
  const sumaPonderada = notas.reduce((sum, nota) => sum + (nota.valor * nota.peso), 0);
  return Math.round(sumaPonderada); // Se redondea
}
// Datos de prueba
const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];
const resultado = promedioPonderado(notas);
console.log(resultado); 