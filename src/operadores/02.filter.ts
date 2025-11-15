import {from, fromEvent, range} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// range(1,10)
//     .pipe(
//         filter(value => value % 2 === 1),
//     )
//     .subscribe(console.log);

interface Personaje {
    nombre: string;
    tipo: 'human' | 'robot';
}

range(20,30)
    .pipe(
        filter((val, i) => {
            console.info('indice', i);
            return val % 2 === 1;
        }),
    )
// .subscribe(console.log);

const personajes: Personaje[] = [
    { nombre: 'Megaman', tipo: 'robot' },
    { nombre: 'Metalman', tipo: 'robot' },
    { nombre: 'Dr. Willy', tipo: 'human' },
    { nombre: 'Roll', tipo: 'robot' },
    { nombre: 'Dr. Light', tipo: 'human' },
];

from(personajes)
    .pipe(
        filter(personaje => personaje.tipo === 'human'),
    )
    .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code),
        filter(key => key === 'Enter'),
    );

keyUp$.subscribe(console.log);