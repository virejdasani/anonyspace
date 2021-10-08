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

    // This scrolls down to the bottom of the page
    document.getElementById("recent").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg: any) => (
            <ChatMessage auth={props.auth} key={msg.id} message={msg} />
          ))}
        <span ref={dummy}></span>
        {/* This footer is at the end of the page */}
        <div id="recent"></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Enter a message"
          autoFocus
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
    <div className="messageTime">
      <div className={`message ${messageClass}`} id={uid}>
        <img src={avatar} alt="avatar" />
        <p>{text}</p>
      </div>
      {/* Checks if timeStamp is available, if yes, shows the time, if not, shows "now" */}
      {createdAt ? (
        <p className="timeStamp">{getReadableTime(createdAt.seconds)}</p>
      ) : (
        <p className="timeStamp">now</p>
      )}
    </div>
  );
}

// Gets time from seconds (as stored in firebase)
function getReadableTime(seconds: number) {
  let unix = new Date(seconds * 1000);
  // This gets [0:5] of the time string which give time in this format: 09:41
  return unix.toLocaleTimeString().substring(0, 5);
}
