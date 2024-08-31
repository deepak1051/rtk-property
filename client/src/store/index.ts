import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export * from './slices/modalSlice';
export * from './slices/userSlice';
