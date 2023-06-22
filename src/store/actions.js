export const setCardTypeFilter = (type) => {
  return {
    type: "SET_CARD_TYPE_FILTER",
    payload: type,
  };
};

export const setReset = (reset) => {
  return {
    type: "SET_RESET",
    payload: reset,
  };
};
