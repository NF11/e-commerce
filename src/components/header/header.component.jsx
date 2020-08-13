import React from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  LogoSvg,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoSvg />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">shop</OptionLink>
      <OptionLink to="/shop">contact</OptionLink>
      {currentUser ? (
        //or use OptionLink with as='div' for styles component
        <OptionDiv onClick={() => auth.signOut()}>sign out</OptionDiv>
      ) : (
        <OptionLink to="/signin">sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = (rootState) => {
  return {
    currentUser: selectCurrentUser(rootState),
    hidden: selectCartHidden(rootState),
  };
};

export default connect(mapStateToProps)(Header);
