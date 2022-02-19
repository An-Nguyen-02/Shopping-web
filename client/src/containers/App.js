import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.js";
import ShopPage from "../pages/Shop/shop.js";
import SigInAndSignUp from "../pages/SignIn-Up/signIn-Up.js";
import Header from "../components/header/header.js";
import react from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckOutPage from "../pages/Checkout/checkout.component";
import { checkUserSession } from "../redux/user/user.actions";
class App extends react.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
