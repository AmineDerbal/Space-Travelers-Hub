import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
  hasError: false,
};

export const getRocketsData = createAsyncThunk('rockets/getRocketsData', async () => {
  try {
    const dataStream = await axios(rocketsUrl);
    console.log(dataStream.data);
    return dataStream.data;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRocketsData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getRocketsData.fulfilled, (state, action) => {
      const isLoading = false;
      const rockets = action.payload;
      return {
        ...state,
        rockets,
        isLoading,
      };
    });
    builder.addCase(getRocketsData.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export default rocketsSlice.reducer;
