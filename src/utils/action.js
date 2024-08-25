export const SET_COMMENT_DATA = "SET_COMMENT_DATA";
export const SET_LIKE_DATA = "SET_LIKE_DATA";
export const SET_MOST_LIKE_DATA = "SET_MOST_LIKE_DATA";
export const SET_MOST_COMMENT_DATA = "SET_MOST_COMMENT_DATA";

export const setCommentData = (data) => ({
  type: SET_COMMENT_DATA,
  payload: data,
});
export const setLikeData = (data) => ({
  type: SET_LIKE_DATA,
  payload: data,
});
export const setMostLiked = (data) => ({
  type: SET_MOST_LIKE_DATA,
  payload: data,
});
export const setMostCommented = (data) => ({
  type: SET_MOST_COMMENT_DATA,
  payload: data,
});
