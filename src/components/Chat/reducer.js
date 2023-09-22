import ACTION_TYPES from './typesAction';
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.DATA_SUCCESS: {
      const { users, messages } = payload;
      const authorsMap = new Map();
      users.map((user) => authorsMap.set(user.id, user));
      const messagesWithAuthor = messages.map((msg) => ({
        ...msg,
        author: authorsMap.get(msg.authorId),
      }));
      const newState = {
        ...state,
        users,
        messages: messagesWithAuthor,
        isFetching: false,
      };
      return newState;
    }
    case ACTION_TYPES.DATA_ERROR: {
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    }
    case ACTION_TYPES.DATA_IS_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
