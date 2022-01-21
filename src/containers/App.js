import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage.js';
import ShopPage from '../pages/Shop/shop.js';
import SigInAndSignUp from '../pages/SignIn-Up/signIn-Up.js';
import Header from '../components/header/header.js';
import { auth } from '../firebase/firebase.util.js';
import react from 'react';

class App extends react.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth  = null;

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
    })


  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SigInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
