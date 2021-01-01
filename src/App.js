import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./components/Home";
// import Header from "./components/Header"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/* <Header /> */}
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
