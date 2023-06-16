
import EventEmitter from 'events';

let instance = null;

class SeiEventEmitter {
    constructor() {
        if (!instance) {
            this._emitter = new EventEmitter();
            console.log(this._emitter)
            instance = this;
        }
        return instance;
    }

    bind(callback){
        this._emitter.on('sei_event', function(){
            console.log('sei_event')
        });
    }

    static remove() {
        SeiEventEmitter.emitter.removeAllListeners();
    }

    send(data) {
        return this._emitter.emit('sei_event', data);
    }

}

SeiEventEmitter.emitter = new EventEmitter();


export default SeiEventEmitter;

