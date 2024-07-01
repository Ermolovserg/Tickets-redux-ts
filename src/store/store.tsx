// store.ts
import { createSlice, createAsyncThunk, configureStore, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ITicket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  startTime: string;
  endTime: string;
  duration: number;
  date: string;
  transfers: number;
}

export interface ITicketsFilter {
  tickets: ITicket[];
  company: string[];
  transfers: number[];
}

const initialState: ITicketsFilter = {
  tickets: [],
  company: ["Redwings", "Ssevenair", "Pobeda"],
  transfers: [0.1, 1, 2, 3],
};

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async () => {
  const response = await axios.get<ITicket[]>("http://localhost:3001/tickets");
  return response.data;
});

const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    setAllTickets: (state, action: PayloadAction<{ tickets: ITicket[] }>) => {
      state.tickets = action.payload.tickets;
    },
    sortTransfers: (state) => {
      state.tickets.sort((x, y) => x.transfers - y.transfers);
    },
    sortPrice: (state) => {
      state.tickets.sort((x, y) => x.price - y.price);
    },
    sortOptimalTickets: (state) => {
      state.tickets.sort((x, y) => {
        const optimalX = x.price / x.duration;
        const optimalY = y.price / y.duration;
        return optimalX - optimalY;
      });
    },
    setFilter(state, action: PayloadAction<{ company: string }>) {
      if (state.company.includes(action.payload.company)) {
        state.company = state.company.filter(
          (el) => el !== action.payload.company
        );
      } else {
        state.company.push(action.payload.company);
      }
    },
    filterNumberTransfer(state, action: PayloadAction<{ transfers: number }>) {
      const index = state.transfers.indexOf(action.payload.transfers);
      
      if (index !== -1) {
        state.transfers = state.transfers.filter(el => el !== action.payload.transfers);
      } else {
        state.transfers.push(action.payload.transfers);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action: PayloadAction<ITicket[]>) => {
      state.tickets = action.payload;
    });
  }
});

export const {
  setFilter,
  setAllTickets,
  sortTransfers,
  sortPrice,
  sortOptimalTickets,
  filterNumberTransfer,
} = ticketSlice.actions;

export const store = configureStore({
  reducer: { tickets: ticketSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
