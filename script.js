const arr = [4, 3, 5, 6, 78, 90];
const search = () => {
  console.log('hi');
  const LargeNumber = arr.filter(lg => lg >= 50);
  console.log(LargeNumber);
};
search();
// const arr2 = 'gbenga';
// console.log(arr.slice(1));
// Named export
// import { understandingModule } from './module.js';
// understandingModule();
// console.log(`i am a normal js`);

// Default export
import all from './module.js';
console.log(`i am a normal js`);
all();
const hi = 'hi';
console.log(hi.toUpperCase());

// importing all export
import * as allExport from './module.js';
console.log(allExport.quantity);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable/array/filter';
import 'regenerator-runtime/runtime';
