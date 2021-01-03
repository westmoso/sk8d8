import React from "react";
import app from "../base";
import Login from "./Login";
import SignUp from "./SignUp";


const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Login />
            <SignUp />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    );
};

export default Home;