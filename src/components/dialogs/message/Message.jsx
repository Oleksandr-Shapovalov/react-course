import React from "react";
import style from "./Message.module.css";

const Message = ({ msg: { message, isYouSender } }) => {
  return (
    <div
      className={`${style.message} ${isYouSender ? style.right : style.left}`}
    >
      {message}
    </div>
  );
};

export default Message;
