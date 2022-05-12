// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', puntos: 95 },
    { name: 'L', puntos: 98 },
    { name: 'M', puntos: 80 },
    { name: 'E', puntos: 50 },
    { name: 'M', puntos: 85 },
    { name: 'J', puntos: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.puntos > 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)
  