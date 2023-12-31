import {configureStore} from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/ice/iceSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        ice : iceReducer,
        user : userReducer
    }
})
export default store;