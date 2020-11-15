const { defaultTheme } = require("../utils");

export default function changeLocation(location){
    console.log("omid", location)
    return {
        type: "CHANGE",
        payload: location
    }
}