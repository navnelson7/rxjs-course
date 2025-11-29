import {from, reduce, scan} from "rxjs";
import {map} from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulaador =  (acc , cur) => acc + cur;
//reduce
from(numeros)
    .pipe(
        reduce(totalAcumulaador, 0)
    )
    .subscribe( console.log );


//scan
from(numeros)
    .pipe(
        scan(totalAcumulaador, 0)
    )
    .subscribe( console.log );

//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'IronMan', autenticado: false, token: null },
    { id: 'IronMan', autenticado: true, token: 'ABC' },
    { id: 'IronMan', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur };
    }, { edad: 33 } as Usuario)
);

const id$ = state$.pipe(
    map(state => state),
);

id$.subscribe( console.log );