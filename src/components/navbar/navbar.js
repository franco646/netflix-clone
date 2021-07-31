import React from "react";
import classNames from "classnames";
import { netflixLogo } from "../../assets/index";
import { Link, NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import Button from "../button/button";
import AccountDropdown from "../accountDropdown/accountDropdown";
import SearchBar from "../searchBar/searchBar";

import "./navbar.scss";

const Navbar = (props) => {
  const { navigation, loginButton, loginNavbar, browseNavbar } = props;

  let navItems;
  if (navigation) {
    navItems = (
      <div className="navbar__items">
        <div className="navbar__links__container">
          <div className="navbar__links__dropdown">
            Explorar
            <AiFillCaretDown />
          </div>
          <div className="navbar__links__items">
            <NavLink to="/browse" activeClassName="selected">
              Inicio
            </NavLink>
            <NavLink to="/browse/series" activeClassName="selected">
              Series
            </NavLink>
            <NavLink to="/browse/movies" activeClassName="selected">
              Películas
            </NavLink>
            <NavLink to="/browse/top" activeClassName="selected">
              Novedades populares
            </NavLink>
          </div>
        </div>
        <div className="navbar__options_container">
          <SearchBar />
          <AccountDropdown />
        </div>
      </div>
    );
  }

  let inputClass = classNames({
    navbar: true,
    login__navbar: loginNavbar,
    browse__navbar: browseNavbar,
  });

  return (
    <nav className={inputClass}>
      <div className="navbar__container">
        <div className="navbar__logo__container">
          <Link to="/">
            <img
              src={netflixLogo}
              alt="Logo Netflix"
              className="navbar__logo"
            />
          </Link>
        </div>
        {navItems}
        {loginButton ? (
          <div className="navbar__options_container">
            <Link to="/login">
              <Button className="btn color-red navbar__login__button">
                Iniciar sesión
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
