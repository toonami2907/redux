import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../features/todos/todoSlice'
import userSlice from '../features/User/userSlice'
import AuthSlice from '@/features/Auth/AuthSlice'



export const store = configureStore({
        reducer: {
            todos: TodoReducer,
            user: userSlice,
            auth: AuthSlice
        },
})