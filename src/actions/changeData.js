
export default function changeData(where){
    console.log(where)
    return {
        type: "CHANGE_DATA",
        payload:
         where
        // {
        //     text: "X. Room",
        //     value: "X-Room",
        //     child:[
        //         {text: "ali",
        //         value: "ali"}
        //     ]
        //   },
    }
}