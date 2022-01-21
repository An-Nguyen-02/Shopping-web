import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage.js';
import ShopPage from '../pages/Shop/shop.js';
import Header from '../components/header/header.js';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
