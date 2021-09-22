import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

import { FooterCointainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    // call in here to firebase to authenticate the user
    // if there's an error, populate the error state
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={emailAddress && password ? false : true}
              type="submit"
            >
              Sign In
            </Form.Submit>
            <Form.Text>
              New To Netflix?{" "}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterCointainer />
    </>
  );
}
