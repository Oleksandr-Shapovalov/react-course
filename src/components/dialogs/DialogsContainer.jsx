import React, { useContext } from "react";
import { DialogsContext } from "./DialogsContext";
import {
  addMessageActionCreator,
  setNewMessageTextActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  const { dialogs, messages, dispatch, newMessageText } =
    useContext(DialogsContext);

  const onMessageChange = (text) => {
    dispatch(setNewMessageTextActionCreator(text));
  };
  const addMessageUI = (text) => {
    if (text) dispatch(addMessageActionCreator());
  };
  return (
    <Dialogs
      setNewMessageText={onMessageChange}
      addMessage={addMessageUI}
      dialogs={dialogs}
      messages={messages}
      newMessageText={newMessageText}
    />
  );
};

export default DialogsContainer;
