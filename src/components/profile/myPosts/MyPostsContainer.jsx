import React, { useContext } from "react";
import { MyPostsContext } from "./MyPostsContext.jsx";
import {
  addPostActionCreator,
  setNewPostTextActionCreator,
} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = () => {
  const { dispatch, posts, newPostText } = useContext(MyPostsContext);
  const addPostUI = () => {
    dispatch(addPostActionCreator());
  };
  const onPostChange = (text) => {
    dispatch(setNewPostTextActionCreator(text));
  };
  return (
    <MyPosts
      setNewPostText={onPostChange}
      addPost={addPostUI}
      posts={posts}
      newPostText={newPostText}
    />
  );
};
export default MyPostsContainer;
