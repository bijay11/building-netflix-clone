import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterCointainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoUrl: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmailAddress("");
            setPassword("");
            setError("");
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST"></Form.Base>
          <Form.Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <Form.Input
            type="password"
            value={password}
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Submit
            type="submit"
            disabled={firstName && emailAddress && password ? false : true}
          >
            Sign Up
          </Form.Submit>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterCointainer />
    </>
  );
}
