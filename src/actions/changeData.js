
export default function changeData(){
    return {
        type: "CHANGE_DATA",
        payload: {
            text: "X. Room",
            value: "X-Room",
            child:[
                {text: "ali",
                value: "ali"}
            ]
          },
    }
}