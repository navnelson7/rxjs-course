import {asyncScheduler, of, range} from 'rxjs';

const src$ = of(1, 2, 3, 4, 5);
const src2$ = range(1, 5, asyncScheduler);

console.log('iniciando secuencia')
src2$.subscribe(console.log);
console.log('secuencia finalizada')