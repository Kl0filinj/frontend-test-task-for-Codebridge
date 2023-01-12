import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';

export const fetchAlldata = createAsyncThunk(
  'data/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/articles');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchById = createAsyncThunk(
  'data/fetchById',
  async (articleId, thunkAPI) => {
    try {
      const response = await axios.get(`/articles/${articleId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
