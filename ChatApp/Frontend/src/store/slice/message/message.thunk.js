import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosinstance } from "../../../components/utilities/axiosInstance";
import { toast } from 'react-hot-toast'

export const sendMessageThunk = createAsyncThunk(
  'message/send',
  async ({ receiverId, message }, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post(`/message/send/${receiverId}`, {
        message
      })
      return response.data
    } catch (error) {
const errorOutput = error?.response?.data?.errMessage || "Failed to fetch messages";
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  },
)

export const getMessageThunk = createAsyncThunk(
  'message/get',
  async ({ receiverId}, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get(`/message/get-messages/${receiverId}`)
      return response.data
    } catch (error) {
const errorOutput = error?.response?.data?.errMessage || "Failed to fetch messages";
      toast.error(errorOutput)
      return rejectWithValue(errorOutput)
    }
  },
)

