import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/cardSlice";

const store = configureStore({
    reducer: {
        cards: cardSlice,
        notActiveCards: cardSlice
    }
})

export default store;