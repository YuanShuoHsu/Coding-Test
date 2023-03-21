import { configureStore } from '@reduxjs/toolkit'

import arrangementReducer from "./slice/arrangement"

export const store = configureStore({
    reducer: {
        arrangement: arrangementReducer,
    },
})

export default store