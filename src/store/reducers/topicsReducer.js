import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    topicList: [
        {Id: "7324b1dd-07c9-4442-b0ac-25feba79965a", Name: "Title", ShortContent: "Short content"},
        {Id: "7324b1dd-07c9-4442-b0ac-25feba79964a", Name: "Title", ShortContent: "Short content"}
    ]
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.topicList = [...state.topicList, {name: "test"}];
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer