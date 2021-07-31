import React from "react";
import classNames from "classnames";

import "./input.scss";

const input = (props) => {
  const { isBlack } = props;

  let inputClass = classNames({
    input: true,
    "color-black": isBlack,
  });

  return <input className={inputClass} {...props} />;
};

export default input;
