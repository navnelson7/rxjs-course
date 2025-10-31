import { of } from 'rxjs'

// const obs$ = of(1, 2, 3, 4, 5)
const obs$ = of([1, 2, 3, 4, 5], {a: 1, b: 2},  function (){}, true, Promise.resolve(true))

console.log('iniciando secuencia')
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('terminada la secuencia')
)
console.log('finalizando secuencia')
