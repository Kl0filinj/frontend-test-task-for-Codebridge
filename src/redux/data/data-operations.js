import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';

export const fetchAlldata = createAsyncThunk(
  'data/fetchAll',
  async ({ perPage, currentPage, limit }, thunkAPI) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //   Если у нас будет фильтр пустой то всё ок по кол-ву, если нет, то будем ставить кол-во с фильтра
    try {
      const getTotalCount = await axios.get(`/articles?_limit=${limit}`);
      const response = await axios.get(
        `/articles?_start=${perPage * currentPage}`
      );

      return { data: response.data, totalCount: getTotalCount.data.length };
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
