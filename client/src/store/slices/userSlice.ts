import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum TranslationType {
  EN = 'en',
  FR = 'fr',
}

interface userInitialStateInterface {
  lang: TranslationType;
}

const userInitialState: userInitialStateInterface = {
  lang: TranslationType.EN,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<TranslationType>) => {
      state.lang = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { updateLanguage } = userSlice.actions;
