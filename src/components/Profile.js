import React, { useState } from "react";
import Switch from "./Switch";
import SkateD8s from "./Calendar";
import DatePicker from 'react-date-picker';


function Profile() {

    const [value, onChange] = useState(new Date());
    return (
        <div>
            <h2>This is Profile Page</h2>
            <Switch />
            <SkateD8s />
            <DatePicker
                onChange={onChange}
                value={value}
                minDate={new Date("02-01-2020")}
                maxDate={new Date("02-29-2020")}
                placeholderText="Select a date in February 2020"
            />
        </div>
    )
}

export default Profile
