import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slice'

export default configureStore({
    reducer: {
        product: productSlice
    },
})