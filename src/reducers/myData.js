import data from "../data"
export default function myData(state = data,action){
    if(action.type === 'CHANGE_DATA'){
        return [...state, action.payload]
    }
    else{
        return state
    }
}
