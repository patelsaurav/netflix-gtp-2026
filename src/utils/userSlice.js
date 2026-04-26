import { createSlice } from '@reduxjs/toolkit'

const initialState = null;
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Replace entire state with payload
      return action.payload;
    },
    deleteUser: () => {
      // Reset state to null
      return null;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;