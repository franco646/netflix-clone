import React from "react";

import "./button.scss";

const button = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default button;
