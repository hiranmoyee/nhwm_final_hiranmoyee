import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
}

const initialState: AuthState = {
  email: "", // Ensure email is initialized as an empty string
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload; // Store email in Redux
    },
  },
});

export const { setUserEmail } = authSlice.actions;
export default authSlice.reducer;
