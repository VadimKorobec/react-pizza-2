import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://64f47f23932537f4051a6aa2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&${search}&order=${order}`
    );
    return data;
  }
);

const initialState = {
    items: [],
    status:'loading',
};

export const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
//   reducers: {
//     setItems(state, action) {
//       state.items = action.payload;
//     },
//   },
  extraReducers:(builder)=> {
      builder
        .addCase(fetchPizzas.pending, (state) => {
          state.status = 'loading';
          state.items = [];
        })
        .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status='success'
        })
        .addCase(fetchPizzas.rejected, (state) => {
          state.status = 'error'
          state.items = [];
        });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
