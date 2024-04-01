

import { configureStore } from "@reduxjs/toolkit";
import usereducer from '../redux/movieslice'
export const store = configureStore({
    reducer:{
          movie:usereducer
    }
})