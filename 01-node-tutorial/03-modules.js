// commonJS, every file is module by default

// Modules -Encapsulated code (only share minimum)

import { secret, john, peter } from './04-names.js';

import sayHi from './05-utils.js';
sayHi('susan');
sayHi(john);
sayHi(peter);
