import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';
const LIMIT = 50

export const fetchAlldata = createAsyncThunk(
  'data/fetchAll',
  async ({ perPage, currentPage, limit, filter }, thunkAPI) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //   Если у нас будет фильтр пустой то всё ок по кол-ву, если нет, то будем ставить кол-во с фильтра
    try {
      if (filter !== '') {
        const getTotalCount = await (
          await axios.get(
            `/articles?_limit=${LIMIT}&title_contains=${filter}&summary_contains=${filter}`
          )
        ).data.length;
        const response = await axios.get(
          `/articles?_start=${
            perPage * currentPage
          }&title_contains=${filter}&summary_contains=${filter}`
        );
        console.log('get from filter');
        console.log(getTotalCount);
        return { data: response.data, totalCount: getTotalCount };
      }

      const getTotalCount = await (
        await axios.get(`/articles?_limit=${LIMIT}`)
      ).data.length;

      const response = await axios.get(
        `/articles?_start=${perPage * currentPage}`
      );

      return { data: response.data, totalCount: getTotalCount };
    } catch (error) {
      console.log(error);
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
