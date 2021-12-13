import IEvent from '../infra/Event'

class Attack implements IEvent {

    handler(payload: Object) {
        console.log('atack')
    }

}

export default new Attack()