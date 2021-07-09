import { configureStore } from '@reduxjs/toolkit'
import userSlice from './client/Slices/userSlice'

export default configureStore({

    reducer: {
        user: userSlice,

    }
})