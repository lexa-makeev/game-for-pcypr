import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const updateAllSlicer = createSlice({
  name: "update",
  initialState,
  reducers: {
    setUpdate(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setUpdate } = updateAllSlicer.actions;
export default updateAllSlicer.reducer;
