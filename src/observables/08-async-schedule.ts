import { asyncScheduler} from "rxjs";

const saludar = () => console.log("Hola mundo");
const saludarConNombre = (nombre: string) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludarConNombre, 2000, "Juan");

const subscritpcion = asyncScheduler.schedule( function (state) {
  console.log('state:', state);
  this.schedule(state +1, 1000);
}, 1000, 0);

// setTimeout(() => {
//     subscritpcion.unsubscribe();
// },7100);

asyncScheduler.schedule(() => subscritpcion.unsubscribe(), 7100);