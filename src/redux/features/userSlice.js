import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const { saveSession, ...userData } = data;
      const response = await axios.post(
        'http://localhost:4444/register',
        userData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return { userResData: response.data, saveSession };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const { saveSession, ...userData } = data;
      const response = await axios.post(
        'http://localhost:4444/login',
        userData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return { userResData: response.data, saveSession };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

//config states
const userSetState = (payload) => {
  const { userResData, saveSession } = payload;
  const { user, token } = userResData;
  if (saveSession) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', JSON.stringify(token));
  } else {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('accessToken', JSON.stringify(token));
  }
  return user;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
  },
});

export default userSlice.reducer;
