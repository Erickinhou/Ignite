const initState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: false,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;
