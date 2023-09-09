import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../service";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return user;
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/authorizeCurrUser",
  async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
      return null;
    }
    const { data: user, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);

    return user;
  }
);

// Define the signUpUser action
export const signUpUser = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }) => {
    try {
      // Register the user using Supabase
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
        throw new Error(error.message);
      }

      // Insert user data into users table
      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            user_id: user.user.id,
            email,
            name,
          },
        ])
        .single();
      if (insertError) {
        throw new Error(insertError.message);
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const userSignOut = createAsyncThunk("user/signOut", async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
});

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(userSignOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userSignOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(userSignOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
