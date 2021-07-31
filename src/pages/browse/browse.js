import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import ProfileSelector from "../../components/profileSelector/profileSelector";

import Home from "./home/home";

const Browse = (props) => {
  const { profile } = props;

  return (
    <>
      <Navbar browseNavbar navigation={profile ? true : false} />
      {!profile ? (
        <ProfileSelector />
      ) : (
        <>
          <Route exact path="/browse">
            <Home />
          </Route>
          <Route path="/browse/series">
            <div style={{ color: "white" }}>Series</div>
          </Route>
          <Route path="/browse/movies">
            <div style={{ color: "white" }}>Peliculas</div>
          </Route>
          <Route path="/browse/top">
            <div style={{ color: "white" }}>Novedades Populares</div>
          </Route>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.selectedProfile,
});

export default connect(mapStateToProps)(Browse);
