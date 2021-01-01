import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SwipeButton from './components/SwipeButton';
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div>
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <SwipeButton />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

 //replace lines 22 and 23 with the cards so it's not always showing