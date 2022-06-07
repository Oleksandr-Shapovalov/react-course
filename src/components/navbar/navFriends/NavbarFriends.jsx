import React, { useContext } from "react";
import { NavbarFriendsContext } from "../NavbarFriendsContext";
import style from "./NavbarFriends.module.css";
const NavbarFriends = () => {
  const { friends } = useContext(NavbarFriendsContext);

  return (
    <div className={style.friendsWrapper}>
      <h2 className={style.title}> Friends</h2>
      <div className={style.friends}>
        {friends.map((friend, i) => (
          <div key={i} className={style.friend}>
            <div className={style.avaBox}>
              <img
                src={
                  friend.avatar ||
                  '"https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"'
                }
                alt=""
              />
            </div>
            <div className={style.name}>{friend.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavbarFriends;
