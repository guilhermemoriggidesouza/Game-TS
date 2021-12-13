import IEvent from '../infra/Event'

class Moviment extends IEvent {

    handler(payload: Object) {
        console.log('moviment')
    }

}

export default new Moviment()