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