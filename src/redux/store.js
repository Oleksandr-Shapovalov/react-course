import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

export const store = {
  _state: {
    profilePage: {
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
    },
    dialogPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "tolik",
          avatar:
            "https://cdn.dribbble.com/users/3495607/screenshots/11107116/media/b23d903d58e0c7524361a9187fb05cc8.png?compress=1&resize=400x300&vertical=top",
        },
        {
          id: 2,
          name: "vitya",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNWApit9dm9cWrkxcYigd4yEDAPcl_tI_jeAJfIR1VD1oeOZnx9Z-1lIGIlveVjqkRLM&usqp=CAU",
        },
        {
          id: 3,
          name: "serega",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSXoQ7k_QLkdffGrNKlq1CMQ_ATpb5wK8OrnkhQCNnm8G7CY_lP6GSEoPZm-n8XXtrkQ&usqp=CAU",
        },
        {
          id: 4,
          name: "vlad",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzYPa1QLm9ByNwLVa7hwNNN_OzpUAy0THLw&usqp=CAU",
        },
        {
          id: 5,
          name: "danya",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKwbs5s5pgs9F4GVeyzlqzlHSrWxrtPMo6w&usqp=CAU",
        },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this);
  },
};
