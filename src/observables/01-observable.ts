import {Observer} from 'rxjs';

const observer: Observer<any> = {
    next: (value: string) => console.log('next:', value),
    error: (err: any) => console.warn('error:', err),
    complete: () => console.info('Completado')
};
