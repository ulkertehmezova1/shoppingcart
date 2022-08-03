 import {ADDTOCARD} from '../constants/index'
 const initState=[]
 
 
 export const addToCardReducer=(state=initState, action)=>{
switch(action.type){
    case ADDTOCARD:
        return [...state, action.payload]

default:
    return state;

}
 }