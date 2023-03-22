import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const dropdownMenuSlice = createSlice({
    name: 'dropdownMenu',
    initialState,
    reducers: {
        changeDropdownMenu: (state, data) => {
            // state.value = data.payload
            // localStorage.setItem("locales", JSON.stringify(data.payload))
        },
    },
})

export const { changeDropdownMenu } = dropdownMenuSlice.actions

export default dropdownMenuSlice.reducer