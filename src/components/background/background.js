import React from "react";
import { backgroundImage } from "../../assets/index";
import "./background.scss";

const background = (props) => {
  const { className } = props;
  return (
    <div className={"background " + className}>
      <img
        src={backgroundImage}
        alt="Background"
        className="background__image"
      />
      <div className="background__img__gradient" />
    </div>
  );
};

export default background;
