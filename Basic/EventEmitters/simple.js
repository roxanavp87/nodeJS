// Even emitter flow
// A class is created with class
// A class inherits from the EventEmitter class using extends
// An instance of an object is created from the class with new
// An observer (a.k.a. event listener) is created with .on(eventName, eventHandler)
// An event is emitted with emit() and the event handler in the observer is executed.
const EventEmitter = require('events');

class Job extends EventEmitter {};

let job = new Job();

job.on('done', function(timeDone) {
    console.log('jobe done on ' + timeDone);
});

job.emit('done', new Date());
