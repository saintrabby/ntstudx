import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            console.log(state.value)
        },
        decrement: (state) => {
            state.value -= 1;
            console.log(state.value)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
            console.log(state.value)
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
