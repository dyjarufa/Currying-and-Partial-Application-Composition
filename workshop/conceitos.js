// conceitos inicias básicos
const numbers = [1, 2, 3, 4, 5]

const double = x => x * 2
const isEven = x => x % 2 === 0
const add = (x, y) => x + y

console.log(
  numbers.map(double),
  numbers.filter(isEven),
  numbers.reduce(add)
)

// computação assíncrona
const asyncComputation = () => Promise.resolve(1)

asyncComputation()
  .then(x => x + 1)
  .then(console.log)

// Decorators Patterns
// adcionar funcionalidade em  funções que já existem

const withLog = fn => /* recebo uma função como parâmetro */
  (...args) => { /* retorno outra função - deixo de forma genérica com o ...args */
    console.log('arguments', args)
    const result = fn(...args) /* computa a função recebida em fn */
    console.log('result', result)
    return result
  }

const mult = (x, y) => x * y

const auditMult = withLog(mult)

auditMult(2, 4)
