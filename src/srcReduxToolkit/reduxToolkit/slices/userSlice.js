import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Feture of createAsyncThunk;
// It will automatically dispatch lifecycle actions based on returned promise.
// generates pending, fulfilled and rejected action types.
// https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
export const fetchUsers = createAsyncThunk('user/fetchUsers', async (payload, thunkApi) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  console.log('STORE_@_FUNCs', thunkApi, thunkApi.getState().users);
  return response.data.map((user) => user.name);

  // [
  //   "STORE_@_FUNCs",
  //   {
  //     "dispatch": " dispatch() ",
  //     "getState": " getState() ",
  //     "requestId": "AuuEM7Qx1WANapKaYfjF6",
  //     "signal": {},
  //     "abort": " abort() ",
  //     "rejectWithValue": " rejectWithValue() ",
  //     "fulfillWithValue": " fulfillWithValue() "
  //   }
  // ]
});

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    pushToUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  // As the async function reducers are not generated by slice, but is generated from outside, so we need to use extraReducers here
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

export const { pushToUsers } = userSlice.actions;
export default userSlice.reducer;
