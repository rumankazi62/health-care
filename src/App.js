import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/About/About';
import Packages from './component/Packages/Packages';
import Nofound from './component/Nofound/Nofound';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/packages">
          <Packages></Packages>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Nofound></Nofound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
