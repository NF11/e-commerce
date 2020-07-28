import React from "react";
import { connect } from "react-redux";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/maracas.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        shop
      </Link>
      <Link className="option" to="/shop">
        contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          sign in
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (rootState) => {
  return {
    currentUser: rootState.user.currentUser,
  };
};

export default connect(mapStateToProps)(Header);
