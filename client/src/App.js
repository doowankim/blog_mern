import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';

import Footer from './components/layout/Footer';
import NavBar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperiece from "./components/add-credentials/AddExperiece";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import ReadBBS from "./components/BBS/readBBS";
import Write from "./components/Write/writing";
import Detail from './components/BBS/Detail';
import Text from "./components/BBS/Text";

import "./App.css";

//authcheck
if(localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);

  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 36000;
  if (decoded.exp < currentTime) {

    store.dispatch(logoutUser());

    window.location.href = '/login'
  }

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/posts" component={ReadBBS} />
              <Switch>
                <PrivateRoute
                  exact //실행
                  path="/dashboard"
                  component={Dashboard}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                    exact
                    path="/add-experience"
                    component={AddExperiece}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                    exact
                    path="/add-education"
                    component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                    exact
                    path="/writing"
                    component={Write}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                    exact
                    path="/detail"
                    component={Detail}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                    exact
                    path="/text"
                    component={Text}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
