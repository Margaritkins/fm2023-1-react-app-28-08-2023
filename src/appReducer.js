import { STATUS_MENU } from './constants';

const appReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case STATUS_MENU.OPEN: {
      return {
        ...state,
        isMenuOpen: true,
      };
    }
    case STATUS_MENU.CLOSE: {
      return {
        ...state,
        isMenuOpen: false,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
