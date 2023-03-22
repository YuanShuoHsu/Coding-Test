import { configureStore } from '@reduxjs/toolkit'

import dropdownMenuReducer from "./slice/dropdownMenu"

export const store = configureStore({
    reducer: {
        dropdownMenu: dropdownMenuReducer,
    },
})

export default store