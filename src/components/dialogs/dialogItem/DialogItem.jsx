import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";
const DialogItem = ({ dialog: { name, id, avatar } }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? style.active : "") + " " + style.item
      }
      to={`/dialogs/${id}`}
    >
      <div className={style.avaBox}>
        <img
          src={
            avatar ||
            "https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"
          }
          alt=""
        />
      </div>
      <div className={style.name}> {name}</div>
    </NavLink>
  );
};

export default DialogItem;
