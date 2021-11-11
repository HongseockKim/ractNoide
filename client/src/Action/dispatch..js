import * as types from './ActionType';

export function Increment(){
    return{
        type:types.INCREMENT
    }
}

export function decrement(){
    return{
        type:types.DECREMENT
    }
}

export function set_upate(){
    return{
        type:types.SET_UPDATE
    }
}