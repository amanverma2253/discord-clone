import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@mui/icons-material/";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firbase";
import firebase from "firebase/compat/app";

const Chat = () => {
  const user = useSelector(selectUser);
  const ChannelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (ChannelId) {
      db.collection("channels")
        .doc(ChannelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [ChannelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(ChannelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => {
          return (
            <Message
              message={message.message}
              user={message.user}
              timestamp={message.timestamp}
            />
          );
        })}
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            type="text"
            placeholder={`Message#${channelName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!ChannelId}
          />
          <button
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Messages
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
