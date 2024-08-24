const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('mayank', function() {
     console.log('Mayank called');
});

emitter.emit('mayank');




