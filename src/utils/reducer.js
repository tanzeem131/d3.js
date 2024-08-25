import {
  SET_COMMENT_DATA,
  SET_LIKE_DATA,
  SET_MOST_LIKE_DATA,
  SET_MOST_COMMENT_DATA,
} from "./action";

const initialState = {
  commentData: [],
  likeData: [],
  mostLiked: [],
  mostCommented: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT_DATA:
      return {
        ...state,
        commentData: action.payload,
      };
    case SET_LIKE_DATA:
      return {
        ...state,
        likeData: action.payload,
      };
    case SET_MOST_LIKE_DATA:
      return {
        ...state,
        mostLiked: action.payload,
      };
    case SET_MOST_COMMENT_DATA:
      return {
        ...state,
        mostCommented: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
