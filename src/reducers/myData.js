import data from "../data"
export default function myData(state = data,action){
    if(action.type === 'CHANGE_DATA'){
        console.log(action)
        return [...state, action.payload]
    }
    else{
        return state
    }
}
