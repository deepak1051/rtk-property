import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalType {
  SUCCESS = 'SUCCESS',
  ADD_PROPERTIES = 'ADD_PROPERTIES',
}

interface ModalInitalState {
  type: ModalType;
  open: boolean;
}

const initialState: ModalInitalState = {
  type: ModalType.SUCCESS,
  open: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<ModalType>) {
      state.open = true;
      state.type = action.payload;
    },

    closeModal(state) {
      state.open = false;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
