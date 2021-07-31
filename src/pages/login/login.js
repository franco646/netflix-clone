import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Background from "../../components/background/background";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { loginUser } from "../../redux/auth/auth.actions";

import "./login.scss";

const login = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    props.login();
  };

  return (
    <>
      <Navbar loginNavbar />
      <Background className="login__background" />
      <div className="login__body">
        <div className="login__card">
          <h1 className="login__card__title">Inicia sesión</h1>
          <form className="login__card__form">
            <Input placeHolder="Email" isBlack />
            <Input placeHolder="Contraseña" isBlack />
            <Button
              className="btn color-red login__form__button"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
            <div className="login__help__link">¿Necesitas ayuda?</div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(loginUser());
    },
  };
};

export default connect(null, mapDispatchToProps)(login);
