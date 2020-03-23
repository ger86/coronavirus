const initialState = {
  confirmed: null,
  deaths: null,
  recovered: null
};

export const SET_GLOBAL_DATA = 'SET_GLOBAL_DATA';

export default function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  if (action.type === SET_GLOBAL_DATA) {
    return action.data;
  }
}