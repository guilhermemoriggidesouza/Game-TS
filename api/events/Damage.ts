import IEvent from '../infra/Event'

class Damage implements IEvent {

    handler(payload: Object) {
        console.log('damage')
    }
}

export default new Damage()