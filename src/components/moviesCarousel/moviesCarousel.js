import React, { useState } from "react";

import Slider from "../slider/slider";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import "./moviesCarousel.scss";

const MoviesCarousel = (props) => {
  const { movies, title } = props;
  const [wasSlided, setWasSilded] = useState(false);
  const [direction, setDirection] = useState(null);

  const handleNext = (e) => {
    const slider = e.target.parentElement.querySelector(".slider");

    setDirection(-1);

    slider.style.transform = wasSlided ? "translate(-40%)" : "translate(-20%)";
  };

  const handlePrev = (e) => {
    const slider = e.target.parentElement.querySelector(".slider");

    if (direction === -1) {
      setDirection(1);
    }

    slider.style.transform = "translate(0)";
  };

  const handleTransition = (e) => {
    const slider = e.target;
    if (slider.className !== "slider") {
      return null;
    }

    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      if (wasSlided) {
        slider.appendChild(slider.firstElementChild);
      }
    }
    setWasSilded(true);
    slider.style.transition = "none";
    slider.style.transform = "translate(-20%)";
    setTimeout(() => {
      slider.style.transition = "transform .54s cubic-bezier(.5,0,.1,1) 0s";
    });
  };

  return (
    <div className="movies__carousel">
      <h2 className="movies__carousel__genre">{title}</h2>
      <div className="carousel">
        <div className="slider" onTransitionEnd={handleTransition}>
          <Slider movies={movies} />
        </div>
        {wasSlided ? (
          <div
            className="carousel__left__button carousel__buttons"
            onClick={handlePrev}
          >
            <FiChevronLeft className="carousel__button__icon" />
          </div>
        ) : null}
        <div
          className="carousel__right__button carousel__buttons"
          onClick={handleNext}
        >
          <FiChevronRight className="carousel__button__icon" />
        </div>
      </div>
    </div>
  );
};

/**
 *         <Slider
          movies={movies}
          posterImage={title === "Solo en Netflix" ? true : false}
        />
 * 
 *         <div className="carousel__left__button">
          <div className="carousel__button"></div>
        </div>
        <div className="carousel__right__button"></div>
 */

export default MoviesCarousel;
