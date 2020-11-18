import data from "../data"
export default function myData(state = data,action){
    console.log('PAYLOAD: ',action.payload)
    if(action.type === 'CHANGE_DATA'){        
        return [...action.payload]
    }
    else{
        return state
    }
}
