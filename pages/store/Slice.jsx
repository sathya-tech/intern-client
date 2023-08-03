import { createSlice } from '@reduxjs/toolkit'



export const productSlice = createSlice({
    name: 'product',
    initialState: {
        id : ""
    },    
    reducers: {
        setId:(state, action) =>{
            state.id = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const {setId} = productSlice.actions

export default productSlice.reducer