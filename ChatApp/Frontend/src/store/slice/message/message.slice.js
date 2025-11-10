import { createSlice } from '@reduxjs/toolkit'
import { getMessageThunk, sendMessageThunk } from './message.thunk';



const initialState = {
    buttonLoading: false,
    messages: null,
    screenLoading: false
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setNewMessage: (state, action) => {
            const oldMessages = state.messages || [];
            state.messages = [...oldMessages, action.payload]
        }
    },
    extraReducers: (builder) => {
        // send mess
        builder.addCase(sendMessageThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            state.messages=[...state.messages ,action.payload?.responseData]
            state.buttonLoading = false
        })
        builder.addCase(sendMessageThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })
        // get mess
        builder.addCase(getMessageThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            state.buttonLoading = false;
            state.messages = action.payload?.responseData?.messages  // fallback to empty array if needed
        })

        builder.addCase(getMessageThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        })

    }
})

export const {setNewMessage} = messageSlice.actions;
export default messageSlice.reducer;