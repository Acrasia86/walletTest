import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: [{ 
            id: 1,
            vendor: 'American express',
            americanExpress: '',
            visa: 'Visa',
            mastercard: 'Mastercard',
            cardNumber: "1111 1111 1111 1111",
            cardHolder: 'Jacob Påhlsson',
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

         state.notActiveCards = [...state.cards, action.payload]
         state.cards.pop();
         state.cards = [...state.cards, action.payload]
         state.notActiveCards.pop();
     
        }
        
    }
})

export const { showCards, addActiveCard } = cardSlice.actions;

export default cardSlice.reducer;