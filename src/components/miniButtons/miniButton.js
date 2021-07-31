import React from "react";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineCaretRight,
  AiOutlineDown,
} from "react-icons/ai";

import "./miniButton.scss";

const MiniButton = (props) => {
  const { icon } = props;
  return (
    <button className="mini__button">
      {icon === "like" ? (
        <AiOutlineLike />
      ) : icon === "dislike" ? (
        <AiOutlineDislike />
      ) : icon === "play" ? (
        <AiOutlineCaretRight />
      ) : icon === "add" ? (
        <AiOutlinePlus />
      ) : icon === "more" ? (
        <AiOutlineDown />
      ) : null}
    </button>
  );
};

export default MiniButton;
