import {fromEvent, mapTo, pipe, pluck, range} from 'rxjs'
import { map } from 'rxjs/operators'

// range(1,5)
//     .pipe(
//         map<number, string>(x => (x * 2).toString())
//     )
//     .subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keydown')

const keyUp2$ = keyUp$.pipe(
    map(event => event.code)
)

// const keyPluck$ = keyUp$.pipe(
//     pluck('target','baseURI')
//

const keyMapTo$ = keyUp$.pipe(
    mapTo(`Tecla presionada`)
)



// keyUp2$.subscribe(val => console.log('map', val));
keyMapTo$.subscribe(val => console.log('mapTo', val));
