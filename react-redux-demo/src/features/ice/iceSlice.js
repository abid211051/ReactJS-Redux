import {createSlice} from '@reduxjs/toolkit';

const initialIceState = {
    numberOfIce : 20
}
const iceSlice = createSlice({
    name : 'ice',
    initialState : initialIceState,
    reducers : {
        iceOrderd(state){
            state.numberOfIce--;
        },
        iceStocked(state, action){
            state.numberOfIce+=action.payload
        }
    }
})

export const {iceOrderd, iceStocked} = iceSlice.actions;
export default iceSlice.reducer;