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
import Trainer from './component/Trainer/Trainer';
import AuthProvider from './context/AuthProvider';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/about/:id">
          <About></About>
        </PrivateRoute>
        <PrivateRoute path="/packages">
          <Packages></Packages>
        </PrivateRoute>
        <PrivateRoute path="/trainer">
          <Trainer></Trainer>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <Nofound></Nofound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
