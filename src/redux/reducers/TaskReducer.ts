import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoaded: false,
  user: undefined,
  pubKey: null,
  priKey: null,
};

export const TaskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    setUser: (state, action) => {
      alert(action.payload);
      state.user = action.payload;
    },

    setKeyPairs: (state, action) => {
      state.pubKey = action.payload.publicKey;
      state.priKey = action.payload.privateKey;
      console.log(action.payload);
    },
  },
});

export const { setUser, setKeyPairs } = TaskReducer.actions;

export default TaskReducer.reducer;
