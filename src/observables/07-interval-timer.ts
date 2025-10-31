import {interval, timer} from 'rxjs'

const observer = {
  next: (value: any) => console.log('next', value),
  error: (err: any) => console.log('error', err),
  complete: () => console.log('complete')
}

const hoyEn5s = new Date()
hoyEn5s.setSeconds(hoyEn5s.getSeconds() + 5)

// Emit values every second
console.log('--- Start Interval Observable ---')
const interval$ = interval(1000)
const timer$ = timer(hoyEn5s)

// const intervalSubscription = interval$.subscribe(observer)
// const timerSubscription = timer$.subscribe(observer);
timer$.subscribe(observer);
console.log('---Ending Interval Observable ---')