import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const registerOperation = createAsyncThunk('auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', userData)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
   
    })

    export const logIn = createAsyncThunk(
  '/users/login',
  async (userData, {rejectWithValue}) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);