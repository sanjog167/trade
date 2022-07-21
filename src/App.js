import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import BecomeSeller from './BecomeSeller';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/become-a-seller" component={BecomeSeller} />
      </Switch>
    </div>
  );
}

export default App;
