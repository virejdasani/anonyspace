import React from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBHlMbSz_nPU28iII28ymDb6U7nTz_yJEo",
  authDomain: "anonyspace-1b5ff.firebaseapp.com",
  databaseURL:
    "https://anonyspace-1b5ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anonyspace-1b5ff",
  storageBucket: "anonyspace-1b5ff.appspot.com",
  messagingSenderId: "357161899322",
  appId: "1:357161899322:web:c75a6d10add2f5448c6c03",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [hasLoggedIn] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1 className="anonyspace">anonyspace</h1>
        <SignOut />
      </header>
      <section>
        {hasLoggedIn ? (
          <ChatRoom firebase={firebase} auth={auth} firestore={firestore} />
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((err) => {
      console.log("signInWithGoogle -> err", err);
    });
  };

  return (
    <div className="center">
      <div className="logInPageTitle"></div>
      <h1>
        log in to access <span className="anonyspace">anonyspace</span>
      </h1>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>

      <h3 className="credit">
        <span className="anonyspace">anonyspace</span> is developed and
        maintained by{" "}
        <span className="virej">
          <a href="https://virejdasani.github.io">Virej Dasani</a>
        </span>
      </h3>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
