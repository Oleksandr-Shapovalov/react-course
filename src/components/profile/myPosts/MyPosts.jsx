import React, { useRef } from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = ({ addPost, setNewPostText, newPostText, posts }) => {
  const textArea = useRef(null);
  const btn = useRef(null);

  const addPostUI = () => {
    addPost();
  };
  const onPostChange = () => {
    setNewPostText(textArea.current.value);
  };
  return (
    <div className={style.postsWrapper}>
      <h3 className={style.title}> My posts</h3>
      <div className={style.postForm}>
        <div>
          <textarea
            onChange={onPostChange}
            value={newPostText}
            ref={textArea}
            className={style.text}
            placeholder="your news..."
            cols="20"
            rows="3"
          />
        </div>
        <div>
          <button
            ref={btn}
            onTouchStart={(_) => {
              btn.current.classList.add(style.touch);
            }}
            onTouchEnd={(_) => {
              btn.current.classList.remove(style.touch);
            }}
            onClick={addPostUI}
            className={style.button}
          >
            Send
          </button>
        </div>
      </div>
      <div className={style.posts}>
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
