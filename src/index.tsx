import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './store/reducers/carrinhoSlice'
import { produtosApi } from './store/services/produtosApi'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [produtosApi.reducerPath]: produtosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware),
})

export default store
