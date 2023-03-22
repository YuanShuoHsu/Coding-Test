import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "tc",
}

export const dropdownMenuSlice = createSlice({
    name: 'dropdownMenu',
    initialState,
    reducers: {
        changeDropdownMenu: (state, data) => {
            switch (data.payload) {
                case "中文":
                    state.value = "tc"
                    break
                case "English":
                    state.value = "English"
                    break
                default:
                    break
            }
        },
    },
})

export const { changeDropdownMenu } = dropdownMenuSlice.actions

export default dropdownMenuSlice.reducer