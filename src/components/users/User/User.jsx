import React, { useRef } from "react";
import style from "./Users.module.css";
const User = ({ user, followToggle }) => {
  const btn = useRef(null);
  return (
    <div className={style.userItem} key={user.id}>
      <div className={style.actions}>
        <div className={style.boxImg}>
          <img src={user.avatar} alt="" />
        </div>
        <button
          ref={btn}
          onTouchStart={(_) => {
            btn.current.classList.add(style.touch);
          }}
          onTouchEnd={(_) => {
            btn.current.classList.remove(style.touch);
          }}
          onClick={() => followToggle(user.id)}
          className={style.follow}
        >
          {user.followed.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={style.info}>
        <div>
          <div className={style.mainInfo}>
            <div className={style.name}>{user.name}</div>
            <div className={style.location}>
              <div className={style.country}>{user.location.country}</div>
              <div className={style.city}>{user.location.city}</div>
            </div>
          </div>
          <div className={style.status}>{user.status}</div>
        </div>
      </div>
    </div>
  );
};
export default User;
