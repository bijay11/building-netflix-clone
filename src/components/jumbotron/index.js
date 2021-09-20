import React from "react";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return <Item {...restProps}></Item>;
}
