import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../service";
const initialState = {
  user: null,
  error: null,
  isLoading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setError, setLoading, clearError, signOut } =
  authSlice.actions;
export default authSlice.reducer;

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true)); // Dispatch the setLoading action

      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        dispatch(setError(error.message)); // Dispatch the setError action
      } else {
        dispatch(setUser(user)); // Dispatch the setUser action
        dispatch(clearError()); // Dispatch the clearError action
      }
    } catch (error) {
      dispatch(setError(error.message)); // Dispatch the setError action
    } finally {
      dispatch(setLoading(false)); // Dispatch the setLoading action
    }
  };
