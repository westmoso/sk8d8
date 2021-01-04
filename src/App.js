import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header"
import Account from "./components/Account";
import CardFrame from "./components/CardFrame"
import Resources from "./components/Resources"
import ChatList from './components/ChatList';
import ChatScreen from './components/ChatScreen';
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div>
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/chat"><ChatList /> </Route>
            <Route path="/chat/:person"><ChatScreen /> </Route>
            <Route exact path="/account" component={Account} />
            <CardFrame />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
