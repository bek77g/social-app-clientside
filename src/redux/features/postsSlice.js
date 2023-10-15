import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from 'configs/instance';

export const createPost = createAsyncThunk(
  'posts/create',
  async (body, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await instance.post('posts', body, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [null],
    status: 'idle',
    error: null,
  },
});

export default postsSlice.reducer;
