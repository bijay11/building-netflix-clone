import React, { useState } from "react";
import { Footer, Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterCointainer } from "./footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Bijay",
    photoURL: "1",
  };
  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterCointainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
