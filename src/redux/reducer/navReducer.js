import { SETROUTEVALUE } from '../action';

const routeReducer = (state = 0, action) => {
  switch (action.type) {
    case SETROUTEVALUE:
      return action.payload;
    default:
      return state;
  }
};

export default {
  routeReducer,
};
