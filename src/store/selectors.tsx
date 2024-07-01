import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const activeFilter = (state: RootState) => state.tickets.company;
const currentTickets = (state: RootState) => state.tickets.tickets;
const numberTransfers = (state: RootState) => state.tickets.transfers;

export const selectFilter = createSelector(
  [currentTickets, activeFilter, numberTransfers],
  (allTickets, activeCompany, activeTransfers) => {
    return allTickets
      .filter((m) => activeCompany.find((el) => el === m.company))
      .filter((t) => activeTransfers.includes(t.transfers));
  }
);
