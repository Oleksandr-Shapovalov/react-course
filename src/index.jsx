import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DialogsContext } from "./components/dialogs/DialogsContext";
import { MyPostsContext } from "./components/profile/myPosts/MyPostsContext";
import { NavbarFriendsContext } from "./components/navbar/NavbarFriendsContext.jsx";
import { UsersContext } from "./components/users/UsersContext.jsx";
import { store } from "./redux/storeRedux.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  const {
    dialogReducer: { dialogs, messages, newMessageText },
    profileReducer: { posts, newPostText },
    sidebarReducer: { friends },
    usersReducer: { users, pageSize, userCount, currentPage, isFetching },
  } = state;

  root.render(
    // <React.StrictMode>
    <UsersContext.Provider
      value={{
        isFetching,
        currentPage,
        users,
        pageSize,
        userCount,
        dispatch: store.dispatch.bind(store),
      }}
    >
      <NavbarFriendsContext.Provider value={{ friends }}>
        <MyPostsContext.Provider
          value={{
            posts,
            newPostText,
            dispatch: store.dispatch.bind(store),
          }}
        >
          <DialogsContext.Provider
            value={{
              dialogs,
              messages,
              newMessageText,
              dispatch: store.dispatch.bind(store),
            }}
          >
            <App />
          </DialogsContext.Provider>
        </MyPostsContext.Provider>
      </NavbarFriendsContext.Provider>
    </UsersContext.Provider>
    // </React.StrictMode>
  );
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
