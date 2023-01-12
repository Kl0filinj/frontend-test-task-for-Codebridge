import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';

export const fetchAlldata = createAsyncThunk(
  'data/fetchAll',
  async (_, thunkAPI) => {
    try {
      console.log('fetch in operations');
      const response = await axios.get('/blogs');
      return response.data;
    } catch (error) {
      //   toast.error('Something goes wrong, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
