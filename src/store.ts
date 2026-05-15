import { configureStore } from '@reduxjs/toolkit'

const appSlice = (state = { loading: false }) => state

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch