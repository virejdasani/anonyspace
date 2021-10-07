import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom(props: any) {
  const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messagesRef = props.firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(2500);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = props.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg: any) => (
            <ChatMessage auth={props.auth} key={msg.id} message={msg} />
          ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit" disabled={formValue === ""}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;

function ChatMessage(props: any) {
  const { text, uid, photoURL, createdAt } = props.message;
  const messageClass = uid === props.auth.currentUser.uid ? "sent" : "received";
  const avatar =
    photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png";

  return (
    <div className={`message ${messageClass}`}>
      <img src={avatar} alt="avatar" />
      <p>{text}</p>
      {createdAt ? <p>{getReadableTime(createdAt.seconds)}</p> : "now"}
    </div>
  );
}

function getReadableTime(seconds) {
  let unix = new Date(seconds * 1000);
  return unix.toLocaleTimeString();
}
