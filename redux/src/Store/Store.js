import { configureStore } from "@reduxjs/toolkit";
import { countingSlice } from "../Slice/Slice";

const Store = configureStore(
    {
        reducer:{
            counting:countingSlice.reducer
        }
    }
)

export default Store