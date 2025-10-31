import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: (value: string) => console.log('next:', value),
    error: (err: any) => console.warn('error:', err),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 5000);

    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();
const subscription = intervalos$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 5000);


// const subs1 = intervalos$.subscribe(rnd => console.log('subs1:', rnd));
// const subs2 = intervalos$.subscribe(rnd => console.log('subs2:', rnd));
