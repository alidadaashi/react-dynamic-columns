export default function location(state = 'seatle',action){
    if(action.type === 'CHANGE'){
        return action.payload
    }
    else{
        return state
    }
}
