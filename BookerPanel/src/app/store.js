import {configureStore} from "@reduxjs/toolkit"
import darkmodeReducer from "../features/darkmode/darkmodeSlice"
export const store = configureStore({
    reducer:{
        darkMode : darkmodeReducer
    }
})