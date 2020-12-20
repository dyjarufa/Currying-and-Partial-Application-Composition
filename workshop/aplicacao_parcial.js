/* Curryng e Aplicação parcial */

const add = x => y => x + y

// Aplicação parcial é uma função para qual já foi aplicada alguns de seus argumentos
const increment = add(1)

console.log(
  add(5)(3),
  increment(111)
)

// curry é uma Hight Order function que recebe uma funcção e torna essa função parcialmente aplicável

// ramda é uma biblioteca de operador funcional para facilidade de programação funcional
// com ela consigo realizar aplicação parcial
const R = require('ramda')

// existe a função curry do ramda que permite realizar aplicação parcial em uma funcção de n argumentos
const add3 = R.curry((x, y, z) =>
  x + y + z
)

// realiza aplicação parcial de forma arbitrária
console.log(
  add3(1, 2, 3),
  add3(1)(2)(3),
  add3(1, 2)(3),
  add3(1)(2, 3)

)
