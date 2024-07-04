import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerOperation = createAsyncThunk('auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', userData)
            setAuthHeader(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
   
    })

    export const logIn = createAsyncThunk(
  '/users/login',
  async (userData, {rejectWithValue}) => {
    try {
      const {data} = await axios.post('/users/login', userData);
      
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
  
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});