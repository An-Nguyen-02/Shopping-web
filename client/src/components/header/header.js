import "./header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionsContainer,
//   OptionLink,
// } from "./header.styles";
const Header = ({ currentUser, hidden, signOutStart }) => (
  //Using css
  <div className="header">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>

  // Using styled components
  // <HeaderContainer>
  //   <Link to="/">
  //     <LogoContainer />
  //   </Link>
  //   <OptionsContainer>
  //     <OptionLink to="/shop">SHOP</OptionLink>
  //     <OptionLink to="/contact">CONTACT</OptionLink>
  //     <Link>
  //       {currentUser ? (
  //         <OptionLink as="div" onClick={() => auth.signOut()}>
  //           SIGN OUT
  //         </OptionLink>
  //       ) : (
  //         <OptionLink to="/signin">SIGN IN</OptionLink>
  //       )}
  //     </Link>
  //     <CartIcon />
  //   </OptionsContainer>
  //   {hidden ? null : <CartDropdown />}
  // </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
