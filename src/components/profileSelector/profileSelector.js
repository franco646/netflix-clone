import React from "react";
import { connect } from "react-redux";

import { setProfile } from "../../redux/auth/auth.actions";

import "./profileSelector.scss";

const profileSelector = (props) => {
  const { selectProfile, profiles } = props;

  return (
    <div className="profile__selector__container">
      <h1 className="profile__selector__title">¿Quién está viendo ahora?</h1>
      <div className="profile__selector__list">
        {profiles.map((profile) => (
          <div className="profile__box" onClick={() => selectProfile(profile)}>
            <img className="profile__img" src={profile.image} alt="profile" />
            <div className="profile__name">{profile.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectProfile: (profile) => {
    dispatch(setProfile(profile));
  },
});

const mapStateToProps = (state) => ({
  profiles: state.auth.profiles,
});

export default connect(mapStateToProps, mapDispatchToProps)(profileSelector);
