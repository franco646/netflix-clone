import React, { useLayoutEffect, useState } from "react";
import Flickity from "react-flickity-component";
import classNames from "classnames";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import MiniButton from "../miniButtons/miniButton";

import "./slider.scss";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  pageDots: false,
  selectedAttraction: 0.04,
  friction: 0.8,
  draggable: false,
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Slider = (props) => {
  const { movies, posterImage } = props;
  const [width, height] = useWindowSize();

  let sliderClases = classNames({
    carousel__item: true,
    carousel__item__poster__image: posterImage,
  });

  const slideContent = [];
  const moviesCopy = [...movies];
  let moviesPerSlice = 5;

  if (width < 980) {
    moviesPerSlice = 4;
  }
  if (width < 800) {
    moviesPerSlice = 3;
  }
  if (width < 500) {
    moviesPerSlice = 2;
  }

  while (moviesCopy.length > 0) {
    const chunk = moviesCopy.splice(0, moviesPerSlice);
    slideContent.push(
      <div className="carousel__items">
        {chunk.map((item, index) => {
          return (
            <div
              className={`${sliderClases} ${
                index === 0
                  ? "item__left"
                  : index === moviesPerSlice - 1
                  ? "item__right"
                  : ""
              }`}
            >
              <img
                key={Math.random()}
                className="carousel__item__image"
                src={`https://image.tmdb.org/t/p/w500${
                  posterImage ? item.poster_path : item.backdrop_path
                }`}
                alt={`${item.title} portada`}
              />
              <div className="item__info__container">
                <div className="item__info__title">
                  {item.title || item.name}
                </div>
                <div className="item__info__buttons">
                  <MiniButton icon="like" />
                  <MiniButton icon="dislike" />
                  <MiniButton icon="play" />
                  <MiniButton icon="add" />
                  <MiniButton icon="more" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return slideContent;
};

export default Slider;
