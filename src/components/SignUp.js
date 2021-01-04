import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../base";
import '../styling/SignUp.css';
import DatePicker from 'react-date-picker';


const SignUp = ({ history }) => {
    const [value, onChange] = useState(new Date());
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
          <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
          <input name="password" type="password" placeholder="Password" />
                </label>

                <button type="submit">Sign Up</button>
                <DatePicker
                    onChange={onChange}
                    value={value}
                    minDate={new Date("02-01-2020")}
                    maxDate={new Date("02-29-2020")}
                    placeholderText="Select a date in January 2021"
                />
            </form>
        </div>
    );
};

export default withRouter(SignUp);