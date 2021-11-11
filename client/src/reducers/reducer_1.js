import * as types from '../Action/ActionType';

const initialiser = {
    number : 0,
    dummy : false,
    dummyObject : {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4
    },
    popOpen: false
};

export default  function reducer_1 (state = initialiser,action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: this.state.number + 1,
                dummyObject: { ...state.dummyObject, a: 10 }
            };

        case types.DECREMENT:
            return {
                ...state,
                number: this.state.number - 1
            };
        case types.SET_UPDATE:
            return {
                ...state,
                popOpen: true
            };
        default:
            return state;
    }
}