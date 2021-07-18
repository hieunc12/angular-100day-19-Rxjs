import { of, map } from 'rxjs';

const source = of('World').pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);
