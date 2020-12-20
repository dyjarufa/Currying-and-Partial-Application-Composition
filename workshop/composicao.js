const pipe = require('pipe')
/* Composição de função  */

// Ordem de execução é da ultima para a primeira

// pseudo-código: const f = compose(f1, f2, ..., fn)

// Como alternativa existe o operador pipe que permite que a execução seja realizada da esquerda para direita

/* Esses conceitos  permite realizar uma programação declarativa
  ou seja, mostra como os steps se compõe entre si */

// Lista de users:

const curry = (fn, n) => {
  const arity = n || fn.length
  return (...params) =>
    params.length >= arity
      ? fn(...params)
      // eslint-disable-next-line no-unused-vars
      : curry(
        (...rest) => fn(...params, ...rest),
        arity - params.length
      )
}

// soma das idades dos users que são admin:

// Array manipulation + utils
const map = curry((mapper, xs) =>
  xs.map(mapper)
)

const filter = curry((predicate, xs) =>
  xs.filter(predicate)
)

const reduce = curry((reducer, initial, xs) =>
  xs.reduce(reducer, initial)
)

const add = curry((x, y) => x + y)

const User = (age, admin) => ({
  age,
  admin,
})

const users = [
  User(30, true),
  User(18, false),
  User(45, true),
]

// funcção de domínio

const isAdmin = user =>
  user.admin

const getAge = user =>
  user.age

const sum = reduce(add, 0)

const sumAll = pipe(
  filter(isAdmin),

  map(getAge),

  sum
)

console.log(
  sumAll(users)
)
