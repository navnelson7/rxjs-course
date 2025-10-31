import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: (value: string) => console.log('next:', value),
    error: (err: any) => console.warn('error:', err),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable<number>(subscriber => {
    let i = 0;
    const intevar = setInterval(() => {
        i++
        subscriber.next(i);
    }, 2500);

    return () => {
        clearInterval(intevar);
        console.log('Intervalo destruido');
    }
});

const subs = intervalos$.subscribe(observer);
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);

subs.add(subs2);
subs.add(subs3);

setTimeout(() => {
    subs.unsubscribe();
}, 3000);