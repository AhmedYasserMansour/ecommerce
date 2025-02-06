import { createSlice } from "@reduxjs/toolkit";
import AuthLogin from "./AuthLogin";
import { TLoading } from "@/types/Shared";

interface IAuthState {
  user: {
    userId: string;
    email: string;
    name: string;
  } | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  loading: "idle",
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(AuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(AuthLogin.fulfilled, (state, action) => {
    state.loading = "succeeded";
      state.user = action.payload; 
    });
    builder.addCase(AuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { AuthLogin };
export const { resetUI, authLogout } = AuthSlice.actions;
export default AuthSlice.reducer;