import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cards from "./components/Cards"
import ChatList from './components/ChatList';
import ChatScreen from './components/ChatScreen';
import SwipeButton from './components/SwipeButton';
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from './components/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div>
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chat"><ChatList /> </Route>
            <Route path="/chat/:person"><ChatScreen /> </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Cards />
            <SwipeButton />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

 //replace lines 22 and 23 with the cards so it's not always showing