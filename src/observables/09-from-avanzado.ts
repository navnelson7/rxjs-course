import {from, interval, of} from "rxjs";

const observer = {
  next: (value: any) => console.log("Next:", value),
  error: (err: any) => console.error("Error:", err),
  complete: () => console.log("Completed"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = miGenerador();

from(iterable).subscribe(observer);


// const source$ = of(...[10, 20, 30, 40, 50]);

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async response => {
//   console.log(response);
//   const dataResponse = await response.json();
//   console.log(dataResponse);
// });

