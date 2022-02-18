import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: [{ 
            id: 1,
            vendor: 'American express',
            americanExpress: 'American express',
            visa: '',
            mastercard: '',
            cardNumber: "1111 1111 1111 1111",
            firstName: 'Jacob',
            lastName: 'Påhlsson',
            expireMonth: 10,
            expireYear: 22,
            ccv: "555",
            isActive: true,
        }],
        notActiveCards: [{
          isUsed: false,
        }]
     
    },
    reducers: {
        
        showCards: (state) => {
            state.cards = state.cards
        },
        addActiveCard: (state, action) => {
         //push to notActive array from cards array
         state.notActiveCards = [...state.cards, action.payload]
         state.cards.pop();
         //push to cards array from input
         state.cards = [...state.cards, action.payload]
         state.notActiveCards.pop();
     
        }
        
    }
})

export const { showCards, addActiveCard } = cardSlice.actions;

export default cardSlice.reducer;