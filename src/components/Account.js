import React from 'react'
import Login from "./Login";
import SignUp from "./SignUp";
import app from "../base";

export default function Account() {
        return (
        <div>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            <Login />
            <SignUp />
        </div>
    )
}
