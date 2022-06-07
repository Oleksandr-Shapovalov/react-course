import React from "react";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import style from "./Profile.module.css";
import InfoProfile from "./profileInfo/InfoProfile";
const Profile = () => {
  return (
    <div>
      <InfoProfile />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
