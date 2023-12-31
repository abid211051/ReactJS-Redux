import {createSlice} from '@reduxjs/toolkit';

const initialCakeState = {
    numberOfCake : 20
}
const cakeSlice = createSlice({
    name : 'cake',
    initialState : initialCakeState,
    reducers : {
        cakeOrderd(state){
            state.numberOfCake--;
        },
        cakeStocked(state, action){
            state.numberOfCake+=action.payload
        }
    }
})

export const {cakeOrderd, cakeStocked} = cakeSlice.actions;
export default cakeSlice.reducer;