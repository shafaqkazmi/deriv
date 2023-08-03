export const ActiveSymbolsRequest = {
  // Currently gets all available symbols.
  // landing_company: "maltainvest", // Uncomment landing_company if you want to retrieve specific symbols.
  active_symbols: "brief",
  product_type: "basic",
};

export const TicksHistoryRequest = {
  ticks_history: "",
  adjust_start_time: 1,
  count: 10,
  end: "latest",
  start: 1,
  style: "ticks",
};

export const TicksRequest = {
  ...TicksHistoryRequest,
  subscribe: 1,
};
