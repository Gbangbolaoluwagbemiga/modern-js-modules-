// Named export
import { understandingModule } from './module.js';
understandingModule();
console.log(`i am a normal js`);

// Default export
import all from './module.js';
all.understandingModule();
console.log(`i am a normal js`);
