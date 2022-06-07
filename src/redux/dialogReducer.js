import { ADD_MESSAGE, SET_NEW_MESSAGE_TEXT } from "./actions";

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "vlad",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
    },
    {
      id: 2,
      name: "danya",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU",
    },
    {
      id: 3,
      name: "yarik",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYs5pjJL91GmWCY320ehmbGjILJt5ofZCmxA&usqp=CAU",
    },
    {
      id: 4,
      name: "misha",
      avatar: "https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg",
    },
    {
      id: 5,
      name: "vanya",
      avatar: "https://cdn.segodnya.ua/img/gallery/5066/23/547459_main.jpg",
    },
  ],
  messages: [
    { id: 1, message: "hi", isYouSender: true },
    { id: 2, message: "hi", isYouSender: false },
    { id: 3, message: "how are u?", isYouSender: true },
    { id: 4, message: "good", isYouSender: false },
    { id: 5, message: "what about u?", isYouSender: false },
  ],
  newMessageText: "",
};
const dialogReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMsg = {
      id: state.messages.length + 1,
      message: state.newMessageText,
      isYouSender: true,
    };
    return {
      ...state,
      messages: [...state.messages, newMsg],
      newMessageText: "",
    };
  } else if (action.type === SET_NEW_MESSAGE_TEXT) {
    return {
      ...state,
      newMessageText: action.text,
    };
  }

  return state;
};
export default dialogReducer;
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const setNewMessageTextActionCreator = (text) => {
  return { type: SET_NEW_MESSAGE_TEXT, text };
};
