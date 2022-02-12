import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.js";
import ShopPage from "../pages/Shop/shop.js";
import SigInAndSignUp from "../pages/SignIn-Up/signIn-Up.js";
import Header from "../components/header/header.js";
import { auth, createUserProfileDocument } from "../firebase/firebase.util.js";
import react from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";
class App extends react.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
