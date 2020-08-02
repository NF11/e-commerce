import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo/maracas.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = (rootState) => {
  return {
    currentUser: selectCurrentUser(rootState),
    hidden: selectCartHidden(rootState),
  };
};

export default connect(mapStateToProps)(Header);
