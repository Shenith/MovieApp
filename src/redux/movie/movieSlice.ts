import {MoviesInitialState, APIResponse} from './types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {axiosInstance} from '../../utils/helpers/axiosApiUtil';
import {API_KEY} from '@env';

const initialState: MoviesInitialState = {
  loading: false,
  movies: [],
  lastLoadedPage: 0,
  error: '',
};

export const getMovies = createAsyncThunk<
  AxiosResponse<APIResponse, null>,
  number,
  {
    rejectValue: string;
  }
>('movies/getMovies', async (page: number, {rejectWithValue}) => {
  try {
    const data = await axiosInstance.get(
      `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data as string);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMovies.pending, state => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.lastLoadedPage = action.payload.data.page;
        if (action.payload.data.page > 1) {
          state.movies = [...state.movies, ...action.payload.data.results];
        } else {
          state.movies = action.payload.data.results;
        }
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload ? action?.payload : 'error';
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
