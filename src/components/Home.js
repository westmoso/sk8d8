import React from "react";
import app from "../base";
import Cards from "./Cards"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Cards />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    );
};

export default Home;