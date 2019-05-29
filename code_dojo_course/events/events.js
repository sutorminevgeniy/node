const EventEmitter = require('events');

const emitter = new EventEmitter();

// Подписание на событие
emitter.on('start', (message) => console.log('1 ',message));
emitter.on('start', (message) => console.log('2 ', message));
// отриагирует только на первое вызванное событие
emitter.once('start', (message) => console.log('once ', message));

// Вызов события
emitter.emit('start', 'Started 1');
emitter.emit('start', 'Started 2');

// emitter.on('start', () => console.log('start'));
// emitter.emit('start');

// удаление всех слушателей
emitter.removeAllListeners();
emitter.emit('start', 'Started remove');