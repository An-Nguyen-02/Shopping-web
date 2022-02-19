import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header/header.js";
import react, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "../redux/user/user.actions";
import Spinner from "../components/spinner/spinner.component";

const Homepage = lazy(() => import("../pages/Homepage/Homepage.js"));
const ShopPage = lazy(() => import("../pages/Shop/shop.js"));
const CheckOutPage = lazy(() => import("../pages/Checkout/checkout.component"));
const SigInAndSignUp = lazy(() => import("../pages/SignIn-Up/signIn-Up.js"));
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
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SigInAndSignUp />
                )
              }
            />
          </Suspense>
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
