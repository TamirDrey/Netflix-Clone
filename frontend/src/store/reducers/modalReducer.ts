import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../types/content-types";
import { RootState } from "../store";

const initialState: ModalState = {
  isOpen: false,
  contentId: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.contentId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contentId = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectIsOpenModal = (state: RootState) =>
  state.modal.isOpen;

