import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";

export function SelectProfileContainer({
  user: { displayName, photoURL },
  setProfile,
}) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName,
                photoURL,
              })
            }
          >
            <Profiles.Picture src={photoURL} />
            <Profiles.Name>{displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
