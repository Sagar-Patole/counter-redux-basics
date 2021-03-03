const initialState = {
  counter: 0,
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
    default:
      return state;
  }
};

export default Reducer;
