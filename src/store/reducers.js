const initialState = {
  type: [],
  title: "filter",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD_TYPE_FILTER":
      let filterList = [...state.type];
      const isPresent = filterList.indexOf(action.type);

      if (isPresent === -1) {
        filterList.push(action.payload);
      } else {
        filterList.splice(isPresent, 1);
      }
      return {
        ...state,
        type: filterList,
      };

    case "SET_RESET":
      return {
        ...state,
        type: [],
      };

    default:
      return state;
  }
};

export default filterReducer;
