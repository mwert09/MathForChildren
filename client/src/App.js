import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/Home";
import Pratik from "./components/pages/Pratik";
import ZamanaKarsi from "./components/pages/ZamanaKarsi";
import SonsuzMod from './components/pages/SonsuzMod';
import Toplama from './components/pages/Toplama';
import Cikarma from './components/pages/Cikarma';
import Carpma from './components/pages/Carpma';
import Bolme from './components/pages/Bolme';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import GameState from "./context/Game/GameState";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <GameState>
          <Router>
            <Fragment>
              <Navbar />

              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />

                <PrivateRoute exact path="/pratik" component={Pratik} />
                <PrivateRoute exact path="/zamanakarsi" component={ZamanaKarsi} />
                <PrivateRoute exact path="/sonsuzmod" component={SonsuzMod}/>

                <PrivateRoute exact path="/toplama" component={Toplama}/>
                <PrivateRoute exact path="/cikarma" component={Cikarma}/>
                <PrivateRoute exact path="/carpma" component={Carpma}/>
                <PrivateRoute exact path="/bolme" component={Bolme}/>
              </Switch>
            </Fragment>
          </Router>
        </GameState>
      </AlertState>
    </AuthState>
  );
};

export default App;

/*
margin-top: 150px;
*/
