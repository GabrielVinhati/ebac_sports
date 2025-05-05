import { configureStore } from '@reduxjs/toolkit'
import favoritoReducer from './reducers/favorito'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
