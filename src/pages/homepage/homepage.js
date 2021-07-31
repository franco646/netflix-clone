import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Background from "../../components/background/background";
import Button from "../../components/button/button";
import Input from "../../components/input/input";

import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <Navbar loginButton />
      <div className="home__body">
        <Background />
        <div className="home__card">
          <h1 className="home__title">
            Películas y series ilimitadas y mucho más.
          </h1>
          <h2 className="home__subtitle">
            Disfruta donde quieras. Cancela cuando quieras.
          </h2>
          <div className="home__email__form">
            <Input placeholder="Email" />
            <Link to="/login">
              <Button className="btn color-red">Comenzar {">"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
