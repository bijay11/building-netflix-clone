import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyBb11OEfvm-71xeHKwhatDF5ZxVLxKpz4Q",
  authDomain: "bijay-netflix.firebaseapp.com",
  projectId: "bijay-netflix",
  storageBucket: "bijay-netflix.appspot.com",
  messagingSenderId: "247503255225",
  appId: "1:247503255225:web:9a60770271b0fc43590d68",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
