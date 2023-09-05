import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../service";

//sign in user
export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(setLoading(true));

      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setUser(user));
        dispatch(clearError());
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

//get user from session
export const getCurrentUser = createAsyncThunk(
  "user/authorizeCurrUser",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data: session } = await supabase.auth.getSession();
      if (!session.session) return null;
      const { data: user, error } = await supabase.auth.getUser();
      if (error) throw new Error(error.message);
      if (user) dispatch(setUser(user));
      if (session.expires_in < 1) dispatch(userSignOut());
      const currentTime = Math.floor(Date.now() / 1000);
      if (session.expires_at < currentTime) {
        dispatch(userSignOut());
        dispatch(setUser(null));
      }
      return user;
    } catch (error) {
      dispatch(setError(true));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// create new user
export const signUpUser = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data: user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      if (error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setUser(user));
        dispatch(clearError());
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

//user signout
export const userSignOut = createAsyncThunk(
  "user/signOut",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data, error } = await supabase.auth.signOut();
      if (error) {
        dispatch(setError(error.message));
        throw new Error(error.message);
      }
      dispatch(setUser(null));
      return data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

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
