import {API_KEY} from './../../configs/index';
import {MoviesInitialState, APIResponse} from './types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {axiosInstance} from '../../utils/helpers/axiosApiUtil';

const initialState: MoviesInitialState = {
  loading: false,
  movies: [],
  error: '',
};

export const getMovies = createAsyncThunk<
  AxiosResponse<APIResponse, any>,
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
  reducers: {
    loadMovieData: state => {
      state.loading = false;
      state.movies = state.movies;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMovies.pending, state => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.movies = action.payload.data.results;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload ? action?.payload : 'error';
      });
  },
});

export const {loadMovieData} = movieSlice.actions;

export default movieSlice.reducer;
