import { ADD_POST, SET_NEW_POST_TEXT } from "./actions";
const initialState = {
  posts: [
    {
      id: 1,
      message: "pretty cool",
      likes: "45",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
    },
    {
      id: 2,
      message: "My the first comment",
      likes: "2",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU",
    },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: state.posts.length + 1,
      message: state.newPostText,
      likes: 0,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxmvp2LOSFAiPwZAtK7eyCC8tep1bxveVoWYIZvsu1g&s",
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: "",
    };
  } else if (action.type === SET_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.text,
    };
  }

  return state;
};
export default profileReducer;
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const setNewPostTextActionCreator = (text) => {
  return { type: SET_NEW_POST_TEXT, text };
};
