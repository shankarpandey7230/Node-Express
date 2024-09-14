import { EventEmitter } from 'events';
// console.log(EventEmitter);

const customEmitter = new EventEmitter(); // instances of EventEmitter

customEmitter.on('response', (name, id) => {
  console.log(`data received user  ${name} with id:${id} `);
});

customEmitter.on('response', () => {
  console.log(`some other function`);
});
// customEmitter.emit('response');
customEmitter.emit('response', 'john', 34);
