import { ADDTOCARD } from "../constants";

export const addToCard=(item)=>{
    
    return{
        type:ADDTOCARD,
        payload:item
    }
}