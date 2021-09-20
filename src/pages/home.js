import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterCointainer } from "../containers/footer";
export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterCointainer />
    </>
  );
}
