// src/index.ts
import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1, 10);

numeros$
    .pipe(
        tap(
            x => {
                console.log('antes', x);
                return 100
            }),
        map(val => val * 10),
        tap({
            next: val => console.log('despues', val),
            complete: () => console.log('Se termino la secuencia')
        })
    )
    .subscribe(val => console.log('subs', val));
