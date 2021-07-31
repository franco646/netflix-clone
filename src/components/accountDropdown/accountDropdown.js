import React from "react";
import { connect } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";

import "./accountDropdown.scss";

const AccountDropdown = (props) => {
  const { selectedProfile, profiles } = props;
  return (
    <div className="account__dropdown">
      <img
        className="account__dropdown__image"
        alt="profile"
        src={selectedProfile.image}
      />
      <AiFillCaretDown className="account__dropdown__caret" />
      <div className="account__dropdown__content">
        {profiles.map((profile) => (
          <div className="account__dropdown__profile">
            <img alt="profile" src={profile.image} />
            <div className="account__dropdown__name">{profile.name}</div>
          </div>
        ))}
        <hr class="solid" />
        <div className="account__dropdown__logout">
          Cerrar sesión en Netflix
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedProfile: state.auth.selectedProfile,
  profiles: state.auth.profiles,
});

export default connect(mapStateToProps)(AccountDropdown);
