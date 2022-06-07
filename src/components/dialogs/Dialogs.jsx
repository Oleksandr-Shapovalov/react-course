import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem.jsx";
import Message from "./message/Message.jsx";
import { useRef } from "react";

const Dialogs = ({
  setNewMessageText,
  addMessage,
  dialogs,
  messages,
  newMessageText,
}) => {
  const btn = useRef(null);
  const textArea = useRef(null);
  const messagesBox = useRef(null);

  const onMessageChange = () => {
    setNewMessageText(textArea.current.value);
  };
  const addMessageUI = async () => {
    await addMessage(textArea.current.value);
    textArea.current.focus();
    const distance =
      messagesBox.current.scrollHeight - messagesBox.current.clientHeight;
    messagesBox.current.scroll({
      left: 0,
      top: distance,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogformItems}>
        {dialogs.map((dialog, i) => (
          <DialogItem dialog={dialog} key={i} />
        ))}
      </div>
      <div className={style.messageContainer}>
        <div ref={messagesBox} className={style.messages}>
          {messages.map((msg, i) => (
            <Message msg={msg} key={i} />
          ))}
        </div>
        <div className={style.postForm}>
          <textarea
            onChange={onMessageChange}
            value={newMessageText}
            ref={textArea}
            className={style.text}
            placeholder="your message..."
            cols="20"
            rows="2"
          />
          <button
            ref={btn}
            onTouchStart={(_) => {
              btn.current.classList.add(style.touch);
            }}
            onTouchEnd={(_) => {
              btn.current.classList.remove(style.touch);
            }}
            onClick={addMessageUI}
            className={style.button}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
