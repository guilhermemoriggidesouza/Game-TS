import events from "events";

class Emitter extends events.EventEmitter {

    sub(sub: string, cb) {
        if(!this.eventNames().find(e => e == sub)){
            console.log("listening: ", sub)
            this.on(sub, cb)
        }
    }
    
    pub(sub: string, payload: Object) {
        console.log("emit to: ", sub)
        this.emit(sub, payload)
    }

} 

export default new Emitter
