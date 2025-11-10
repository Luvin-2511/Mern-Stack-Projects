import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosinstance } from "../../../components/utilities/axiosInstance";
import { toast } from 'react-hot-toast'

export const loginUserThunk = createAsyncThunk(
  'user/loginUserThunk',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post('/user/login', {
        username,
        password
      })
      toast.success("Login Successful")
      return response.data
    } catch (error) {
      const errorOutput = error?.response?.data?.errMessage || "Login failed";
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  },
)

export const registerUserThunk = createAsyncThunk(
  'user/registerUserThunk',
  async ({ username, password, gender }, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post('/user/register', {
        username,
        password,
        gender
      })
      toast.success("Account Created Successfully")
      return response.data
    } catch (error) {
      const errorOutput = error?.response?.data?.message;
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  },
)

export const logoutUserThunk = createAsyncThunk(
  "user/logoutUserThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post('/user/logout')
      toast.success("Logout Successful")
      return response.data
    } catch (error) {
      const errorOutput = error?.response?.data?.message || "Logout failed";
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  }
)

export const getUserProfileThunk = createAsyncThunk(
  'user/getUserProfileThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get('/user/get-profile')
      return response.data
    } catch (error) {
      const errorOutput = error?.response?.data?.message;
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  },
)

export const getOtherUsersThunk = createAsyncThunk(
  'user/getOtherUsersThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get('/user/get-other-users')
      return response.data
    } catch (error) {
      const errorOutput = error?.response?.data?.message;
      // toast.error(err/orOutput)
      return rejectWithValue(errorOutput)
    }
  },
)