import { createStore } from 'redux';
import { ADDITION, INCREMENT, DECREMENT, SUBSTRACT } from './constants'

const INITI_VALUE = {
    counter: 0
}

const counterReducer = (state = INITI_VALUE, action) => {

    const { type } = action
    if (type === INCREMENT) {
        return { ...state, counter: state.counter + 1 };
    } else if (type === DECREMENT) {
        return { ...state, counter: state.counter - 1 };
    } else if (type === ADDITION) {
        return { ...state, counter: state.counter + Number(action.payload.num)};
    }else if (type === SUBSTRACT) {
        return { ...state, counter: state.counter - Number(action.payload.num)};
    }
    return state;
}
const counterStore = createStore(counterReducer);

export default counterStore;