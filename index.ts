import { fromEvent, throttleTime } from 'rxjs/dist/types';

const rate = 1000;
let lastMove = Date.now() - rate;
document.addEventListener('mousemove', ev => {
  if (Date.now() - lastMove >= rate) {
    console.log(ev);
    lastMove = Date.now();
  }
});

fromEvent(document, 'mousemove')
  .pipe(throttleTime(1000))
  .subscribe(console.log);
