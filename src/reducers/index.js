import {combineReducers} from "redux"
import { defaultTheme } from "../utils"
import location from "./location"
import myData from "./myData"

export default combineReducers({
    location,
    myData
})