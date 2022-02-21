const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  console.log({
    ...state,
    ...action.payload,
  });
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        ...action.payload,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        ...action.payload,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
