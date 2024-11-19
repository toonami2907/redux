import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async thunk for signup
export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      
      if (!email || !password) {
        return rejectWithValue('Required Field missing');
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      const userExists = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );
      
      if (userExists) {
        return rejectWithValue('User already exists');
      }

      const checkedEmail = email.toLowerCase();
      const newUser = { email: checkedEmail, password };
      users.push(newUser);
      
      // Store in localStorage
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser));
      
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

// Create async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const checkedEmail = email.toLowerCase();
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (user) => user.email === checkedEmail && user.password === password
      );

      if (!user) {
        return rejectWithValue('Invalid email or password');
      }

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const currentUser = JSON.parse(localStorage.getItem('user'));
      
      // Find and update user in users array
      const updatedUsers = users.map(user => {
        if (user.email === currentUser.email) {
          return { ...user, ...userData };
        }
        return user;
      });

      // Update users in localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Update current user
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update profile');
    }
  }
);
export const deleteAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState().auth;
      if (!user) {
        return rejectWithValue('No user logged in');
      }

      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Filter out the current user
      const updatedUsers = users.filter(u => u.email !== user.email);
      
      // Update localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.removeItem('user');
      
      return null;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete account');
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  loading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
      // Signup reducers
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login reducers
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Profile reducers
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetError, resetUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;