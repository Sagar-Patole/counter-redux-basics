const initialState = {
  counter: 0,
  results: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'SHOW':
      return {
        ...state,
        results: [...state.results, state.counter],
      };
    case 'DELETE':
      return {
        ...state,
        results: state.results.filter((el, index) => index !== action.id),
      };
    default:
      return state;
  }
};

export default Reducer;
