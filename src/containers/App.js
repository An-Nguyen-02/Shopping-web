import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage.js';
import ShopPage from '../pages/Shop/shop.js';
const HatsPage = ()=>{
  <div>
    <h1>HATS PAGE</h1>
  </div>
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
